"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { LoginFormType } from "@/types/LoginFormTypes";

export default function SignInWithGoogleButton(props: LoginFormType) {
  const getSupabaseClient = () => {
    const supabase = createClient();
    return supabase;
  };
  const signInWithGoogle = async () => {
    const supabase = getSupabaseClient();
    // https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr?framework=nextjs
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    // console.log(data, error)
  };

  const getUser = async () => {
    const supabase = getSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);
  };

  const [user, setuser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="">
      <Button
        onClick={signInWithGoogle}
        variant="ghost"
        className="w-full border border-gray-300 rounded-lg "
      >
        <div className="flex items-center relative left-[-8px]">
          <img
            src="/assets/login/web_neutral_sq_na.svg"
            alt="Google logo"
            className="w-6 h-6 mr-2"
          />
          {props.formType !== "register" && <span> Continuar&nbsp;</span>}
          {props.formType === "register" && <span> Registre-se&nbsp;</span>}
          <span>com Google</span>
        </div>
      </Button>
    </div>
  );
}
