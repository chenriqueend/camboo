"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import SignInWithGoogleButton from "@/components/auth/SignInWithGoogleButton";
import GradientBox from "@/components/shared/GradientBox";
import BackBtn from "@/components/shared/BackBtn";
import { objectToQueryString } from "@/lib/utils";
import { LoginFormProps } from "@/types/LoginFormTypes";
import MySpinner from "../shared/Spinner";
import LoginEnterButton from "./LoginEnterButton";
import Stepper from "@/app/(auth)/register/Stepper/Stepper";
import "../../app/globals.css";
import Tag from "../ui/Tag";
import { ButtonLink } from "../ui/buttonLink";
import Link from "next/link";

export default function LoginOrRegisterCmp(props: LoginFormProps) {
  // const getSupabaseClient = async () => {
  //   "use server";
  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);
  //   return supabase;
  // };

  // const signInWithPassword = async (formData: FormData) => {
  //   "use server";

  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = await getSupabaseClient();

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     let errorMsg = error.message;
  //     if (error.message === "Email not confirmed") {
  //       errorMsg =
  //         "Email não confirmado. Por favor, verifique seu e-mail para confirmar sua conta.";
  //     }

  //     const url = { ...props.searchParams, message: errorMsg };
  //     // return redirect(`/login?message=${errorMsg}`)
  //     return redirect(`/login?${objectToQueryString(url)}`);
  //   }

  //   return redirect("/");
  // };

  // const signUpWithPassword = async (formData: FormData) => {
  //   "use server";

  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   // console.log(email, password);

  //   const supabase = await getSupabaseClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     // const errorMsg = JSON.stringify({
  //     //   message: error.message,
  //     //   details: error.cause,
  //     // })
  //     const errorMsg = error.message;

  //     const url = { ...props.searchParams, message: errorMsg };

  //     return redirect(`/login?${objectToQueryString(url)}`);
  //     // return redirect(`/login?message=${errorMsg}`)
  //   }

  //   props.onRegisterSuccess && (await props.onRegisterSuccess());
  //   // return redirect('/')
  //   return true;
  // };

  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["1", "2", "3"];
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const tags = Array.from({ length: 9 }, (_, i) => `interesse ${i + 1}`);
  const [activeTags, setActiveTags] = useState<boolean[]>(Array(9).fill(false));
  const handleTagClick = (index: number) => {
    setActiveTags((prev) => {
      const newActiveTags = [...prev];
      newActiveTags[index] = !newActiveTags[index];
      return newActiveTags;
    });
  };

  return (
    <div className="flex flex-col items-center ">
      {/* <BackBtn
        path="/register"
        className="absolute left-[0px] top-4 lg:left-8 lg:top-8 text-foreground"
      /> */}
      <section className="w-full px-12 lg:w-[30vw]">
        <section className="flex flex-col items-center mt-12 ">
          <div className="w-[200px] h-[60px] relative">
            <Logo />
          </div>
        </section>
        <div className="mt-4 border-gradient-rounded bg-white">
          <section className="mx-16 my-8 ">
            {props.formType === "welcome" && (
              <section className="mb-8">
                <Stepper steps={steps} currentStep={currentStep} />
              </section>
            )}
            <section className="flex flex-col items-center mt-4 mb-14 text-[#4F4F4F]">
              {props.formType === "login" && (
                <h1 className="text-2xl text-black mb-2 font-bold">
                  Faça login para começar
                </h1>
              )}
              {props.formType === "register" && (
                <h1 className="text-2xl font-bold text-black mb-2">
                  Crie a sua conta
                </h1>
              )}
              {props.formType === "welcome" && currentStep === 0 && (
                <h1 className="text-2xl font-bold text-black text-center">
                  Bem Vindo
                </h1>
              )}

              {props.formType === "welcome" && currentStep === 1 && (
                <h1 className="text-2xl ">qual a sua localização?</h1>
              )}
              {props.formType === "welcome" && currentStep === 2 && (
                <h1 className="text-2xl  ">quais seus interesses?</h1>
              )}
              {props.formType === "welcome" && currentStep === 0 && (
                <p className="text-base mt-2 font-sans text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  lobortis maximus
                </p>
              )}
              {props.formType === "welcome" && currentStep === 1 && (
                <p className="text-base mt-2 font-sans">
                  é importante saber por... Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              )}
              {props.formType === "welcome" && currentStep === 2 && (
                <p className="text-base mt-2 font-sans">
                  para criar sugestões... Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              )}
              {props.formType === "welcome" && currentStep === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 cursor-pointer">
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      text={tag}
                      isActive={activeTags[index]}
                      onClick={() => handleTagClick(index)}
                    />
                  ))}
                </div>
              )}

              {props.formType !== "welcome" && (
                <h4 className="text-center mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  lobortis maximus
                </h4>
              )}
            </section>

            {props.formType !== "onlyUserAndPassword" &&
              props.formType !== "welcome" && (
                <>
                  <section className="mb-4">
                    <SignInWithGoogleButton formType={props.formType} />
                  </section>

                  <section>
                    <Button
                      variant="ghost"
                      className="w-full border border-gray-300 rounded-lg "
                    >
                      <img
                        src="/assets/login/fb.svg"
                        alt="Google logo"
                        className="w-6 h-6 mr-2"
                      />

                      {props.formType !== "register" && <span>Continuar</span>}
                      {props.formType === "register" && (
                        <span>Registre-se</span>
                      )}
                      <span>&nbsp;com Facebook</span>
                    </Button>
                  </section>
                  <div className="flex items-center justify-center my-4">
                    <div className="flex-grow mr-2 border-t border-gray-300"></div>
                    <span className="text-gray-600">OU</span>
                    <div className="flex-grow ml-2 border-t border-gray-300"></div>
                  </div>
                </>
              )}
            {/* <form> */}
            <div>
              {props.formType !== "welcome" && (
                <div className="mb-4">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Exemplo@email.com"
                    required
                  />
                </div>
              )}

              {props.formType === "register" && (
                <div className="mb-4">
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}
              {props.formType === "login" && (
                <div className="mb-4">
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}

              {(props.formType === "login" ||
                props.formType === "onlyUserAndPassword") && (
                // <LoginEnterButton>
                //   {/* formAction={signInWithPassword} */}
                //   Entrar
                // </LoginEnterButton>
                <Button
                  className="w-full bg-dark-blue-gradient hover:opacity-90"
                  onClick={nextStep}
                  hasLink={true}
                  linkURL={"/feed"}
                  textButton={"Entrar"}
                />
              )}

              {props.formType === "welcome" && currentStep === 0 && (
                <div className="mb-6">
                  <p className="text-[#041737] text-base font-bold mb-2 ml-1">
                    seu nome completo
                  </p>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Steve Jobs"
                    required
                  />
                </div>
              )}
              {props.formType === "welcome" && currentStep === 0 && (
                <div className="mb-28">
                  <p className="text-[#041737] text-base font-bold mb-2 ml-1">
                    como você quer ser chamado?
                  </p>
                  <Input type="text" name="name" placeholder="Steve" required />
                </div>
              )}
              {props.formType === "welcome" && currentStep === 1 && (
                <div className="mb-28">
                  <Input
                    type="text"
                    name="email"
                    hasMail={true}
                    placeholder="Recife"
                    required
                  />
                </div>
              )}

              {props.formType === "welcome" && (
                <>
                  <Button
                    className="w-full bg-dark-blue-gradient hover:opacity-90"
                    onClick={nextStep}
                    hasLink={currentStep === 2}
                    linkURL={"/feed"}
                    textButton={"Continuar"}
                  >
                    {/* formAction={signUpWithPassword} */}
                    Continuar
                  </Button>
                </>
              )}
              {props.formType === "register" && (
                <>
                  <Button
                    className="w-full bg-dark-blue-gradient hover:opacity-90"
                    onClick={nextStep}
                    hasLink={true}
                    linkURL={"/welcome"}
                    textButton={"Registrar"}
                  />
                </>
              )}

              {props.searchParams?.message && (
                <p className="p-4 mt-4 text-center bg-foreground/10 text-foreground">
                  {props.searchParams.message}
                </p>
              )}
            </div>
            {/* </form> */}
          </section>
        </div>
      </section>

      {/* <InformLocation />

      <InformInterests /> */}
    </div>
  );
}
