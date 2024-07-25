import React from "react";
import GradientBox from "../shared/GradientBox";
import { Button } from "../ui/button";
import { Input } from "../../components/ui/Input";

export default function WelcomeRegisterName(props: { btnAction: () => void }) {
  return (
    <div>
      <GradientBox className="w-[50vw]">
        <div className="m-auto mt-[55px] w-[70%] text-center">
          <h2 className="text-[1.4rem] font-bold">Bem vindo!</h2>
          <p className="text-[1rem] font-light text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            id nisi consequatur quod.
          </p>
        </div>
        <div className="m-auto mb-[55px] mt-[30px] w-[60%]">
          <div>
            <label className="text-[.9rem] font-semibold" htmlFor="">
              seu nome completo
            </label>
            <Input placeholder="ex.: Pedro Silva" />
          </div>
          <div className="mt-4">
            <label className="text-[.9rem] font-semibold" htmlFor="">
              como voce quer ser chamado?
            </label>
            <Input placeholder="ex.: Pedro" />
          </div>
          <Button className="mt-4 w-full" onClick={props.btnAction}>
            Continuar
          </Button>
        </div>
      </GradientBox>
    </div>
  );
}
