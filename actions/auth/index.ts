"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const getSupabaseServerClient = () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    return supabase;
}


export const DefaultSignOffAction = async () => {
    return await SignOffAction();
}

export const SignOffAction = async (redirectTo?: string) => {

    const supabase = getSupabaseServerClient()

    console.log("🚀 ~ SignOffAction ~ supabase:", Date.now())

    await supabase.auth.signOut();

    console.log("🚀 ~ SignOffAction ~ supabase:", Date.now())

    if (redirectTo) return redirect(redirectTo);
    return redirect("/");
}

export const getSupabaseUser = async () => {
    "use server";

    const supabase = getSupabaseServerClient()
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

export const getAuthUser = async () => {
    "use server";

    const user = await getSupabaseUser();

    if (!user) {
        return null;
    }

    return {
        id: user.id,
        email: user.email || "",
        name: user.user_metadata.full_name || "",
        avatar: user.user_metadata.avatar_url || "",
        isConfirmed: user.confirmed_at !== null || user.confirmed_at !== undefined || user.confirmed_at !== "",
    };
}

export type AuthUserType = {
    id: string;
    email: string;
    name: string;
    avatar: string;
    isConfirmed: boolean;
} | null;