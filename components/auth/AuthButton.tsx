import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";

import { SignOffAction } from "@/actions/auth";
import { Button } from "../ui/button";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOutAndRedirect = async () => {
    "use server";
    await SignOffAction("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Olá, {user.email}!
      <form action={signOutAndRedirect}>
        <button className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
          Sair
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="flex px-3 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
    >
      <Button className="w-full">Entrar</Button>
    </Link>
  );
}
