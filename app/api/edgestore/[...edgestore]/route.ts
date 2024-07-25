import { createClient } from '@/utils/supabase/server';
import { initEdgeStore } from '@edgestore/server';
import { CreateContextOptions, createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
import { cookies } from 'next/headers';
import { z } from 'zod';

type Context = {
    userId: string;
    userRole: 'admin' | 'user';
};

async function createContext({ req }: CreateContextOptions): Promise<Context> {
    // const { id, role } = await getUserSession(req); // replace with your own session logic
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: { user },

    } = await supabase.auth.getUser();

    console.log("🚀 ~ EdgeStore - createContext ~ user:", user?.id)

    return {
        userId: user?.id || "Unknown",
        userRole: "admin",
    };
}

const es = initEdgeStore.context<Context>().create();

/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
    publicFiles: es.fileBucket({
        maxSize: 1024 * 1024 * 10, // 10 MB
        accept: ["image/jpeg", "image/png"],
    })
        .input(z.object({ type: z.enum(["post", "profile"]) }))
        .path(({ input }) => [{ type: input.type }])
        // this metadata will be added to every file in this bucket
        .metadata(({ ctx, input }) => ({
            userId: ctx.userId,
        })),
});

const handler = createEdgeStoreNextHandler({
    router: edgeStoreRouter,
    createContext
});

export { handler as GET, handler as POST };

/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;