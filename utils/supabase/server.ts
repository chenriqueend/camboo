import { Database } from "@/types/supabase.types";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy-key";

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // O método `set` foi chamado a partir de um componente de servidor.
          // Isso pode ser ignorado se você tiver middleware que atualiza
          // as sessões do usuário.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // O método `delete` foi chamado a partir de um componente de servidor.
          // Isso pode ser ignorado se você tiver middleware que atualiza
          // as sessões do usuário.
        }
      },
    },
  });
};

export const getSupabaseServerClient = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};
