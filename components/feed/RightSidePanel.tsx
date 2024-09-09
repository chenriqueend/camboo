import React from "react";
import LayoutComponents from "../shared/LayoutComponents";
import { interests } from "@/mocks/Interests";
import { AiFillStar } from "react-icons/ai";

export default function RightSidePanel() {
  return (
    <div className="flex flex-col gap-y-4 w-[30vh]">
      <section className="bg-white rounded-lg h-[400px]">
        <section className="flex flex-col p-2 pt-4 pl-4 font-semibold">
          Perfis que você deve gostar
        </section>
        <hr className="" />
        <div className="flex items-start gap-[10px] p-[10px] px-[9px] self-stretch border-1 border-[#FDFBFB] shadow-sm m-2">
          <img
            src={"https://avatars.githubusercontent.com/u/103892127?v=4"}
            alt="avatar"
            className=" rounded-full w-9 h-9 mt-1"
          />
          <div className="flex flex-col">
            <div>Carlos Henrique</div>
            <div className="flex ">
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
            </div>
            <div className="text-xs text-slate-400">Ver perfil</div>
          </div>
        </div>
        <div className="flex items-start gap-[10px] p-[10px] px-[9px] self-stretch border-1 border-[#FDFBFB] shadow-sm m-2">
          <img
            src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"}
            alt="avatar"
            className=" rounded-full w-9 h-9 mt-1"
          />
          <div className="flex flex-col">
            <div>Rodrigo Martins</div>
            <div className="flex ">
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
            </div>
            <div className="text-xs text-slate-400">Ver perfil</div>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-lg h-[400px]">
        <section className="flex flex-col p-2 pt-4 pl-4 font-semibold">
          populares no momento
        </section>
        <hr className="" />
        <div className="flex flex-wrap gap-x-2 gap-y-2 m-6">
          {interests.map((interest) => (
            <div className="flex items-center h-3 p-4 text-sm bg-white rounded-xl border-[#5001A8] border-2">
              {interest.name}
            </div>
          ))}
        </div>
      </section>
      {/* <section className="bg-white rounded-lg h-[200px]">
        <section className="flex flex-col p-2 pt-4 pl-4 font-semibold">
          sugestões de troca
        </section>
        <hr className="" />
      </section> */}
    </div>
  );
}
