import React from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { ButtonLink } from "../ui/buttonLink";

export default function WelcomeComponent() {
  return (
    <div className="w-full lg:w-[600px] space-y-8 px-4">
      <div className="relative w-full h-[80px] lg:h-[170px]">
        <Logo />
      </div>
      <ButtonLink href="/login">
        <Button className="w-full">Entrar</Button>
      </ButtonLink>

      <ButtonLink href="/register">
        <Button className="w-full">Registar</Button>
      </ButtonLink>
      {/* <ButtonLink href="/welcome">
        <Button className="w-full">Registar</Button>
      </ButtonLink> */}
    </div>
  );
}
