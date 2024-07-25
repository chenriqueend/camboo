import Logo from "@/components/Logo";
import LoginOrRegisterCmp from "@/components/auth/LoginOrRegisterCmp";
import GradientBox from "@/components/shared/GradientBox";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

type RegisterPageProps = {
  searchParams: { message: string; statusCode: number };
};
export default function RegisterPage({ searchParams }: RegisterPageProps) {
  const onSuccess = async () => {
    "use server";
    console.log("onSuccess");

    const statusCode = 0;
    return redirect(`/register?statusCode=${statusCode}`);
  };

  const navigateToLogin = async () => {
    "use server";
    redirect("/login?mode=pwd");
  };
  return (
    <div className="flex flex-col items-center">
      {!searchParams.statusCode && (
        <LoginOrRegisterCmp
          searchParams={searchParams}
          formType="welcome"
          onRegisterSuccess={onSuccess}
        />
      )}
    </div>
  );
}
