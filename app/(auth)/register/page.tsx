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
          formType="register"
          onRegisterSuccess={onSuccess}
        />
      )}

      {searchParams.statusCode && +searchParams.statusCode === 0 && (
        <section className="flex flex-col items-center justify-center w-full h-full gap-6 ">
          <section className="flex flex-col items-center mt-12 ">
            <Logo />
          </section>
          <GradientBox className="mt-12">
            <section className="p-3">
              <section className="flex flex-col items-center mt-2 mb-6">
                <h1 className="text-2xl">
                  Por favor, verifique seu e-mail para confirmar sua conta.
                </h1>
                <h4 className="mt-10 text-lg">Usuário criado com sucesso!</h4>
                <form action={navigateToLogin}>
                  <Button className="mt-10">Ir para Login</Button>
                </form>
              </section>
            </section>
          </GradientBox>
        </section>
      )}
    </div>
  );
}
