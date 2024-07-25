import WelcomeComponent from "../components/welcome/index";
import AuthButton from "../components/auth/AuthButton";
import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "../components/ui/button";
import { APP_CONFIG } from "../config";
import Head from "next/head";
import "./globals.css";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isSupabaseConnected && user && user.email) {
    // const { data: users, error } = await supabase
    //   .from("profile_details")
    //   .select("*")
    //   .eq("email", user.email);
    // console.log(users, user);
    redirect(APP_CONFIG.redirects.main);
  }

  return (
    <main className="w-full">
      <Head>
        <link
          // href="https://fonts.googleapis.com/css2?family=New+Order:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col items-center mt-[20vh]">
        {/* {isSupabaseConnected && <AuthButton />} */}
        <WelcomeComponent />
      </div>
    </main>
  );
}

/**
<div className="flex flex-col items-center flex-1 w-full gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
        <Header />
        <main className="flex flex-col flex-1 gap-6">
          {isSupabaseConnected ?? <SignUpUserSteps />}
        </main>
      </div>
    </div>
**/
