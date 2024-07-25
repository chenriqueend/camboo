"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import TabNavigator from "@/components/shared/TabNavigator";
import { AiFillStar } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState("anúncios");
  return (
    <div className="w-[1200px] mt-12">
      <div className="flex mb-12">
        {" "}
        <img
          src={"https://avatars.githubusercontent.com/u/103892127?v=4"}
          alt="avatar"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div className="flex flex-col mt-6">
          <h3>Carlos Henrique</h3>
          <div className="flex mt-1">
            <AiFillStar className="text-[#95BEFE]" />
            <AiFillStar className="text-[#95BEFE]" />
            <AiFillStar className="text-[#95BEFE]" />
            <AiFillStar className="text-[#95BEFE]" />
            <AiFillStar className="text-[#95BEFE]" />
            <p className="ml-1 mb-1 text-xs font-extralight">(0) Avaliações</p>
          </div>
          <h4>Recife, PE</h4>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-dark-blue-gradient hover:opacity-90 cursor-pointer mb-2">
            <Link href={"/user/perfil/editProfile"}>
              <GoGear className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4 mb-12">
        <div className="w-[25.3%] bg-[#FFF] px-5 py-3 flex-col items-start gap-6 rounded-2xl ">
          <h2 className="text-base font-bold text-[#5001A8] mb-4">About me</h2>
          <p className="mb-4">
            Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non
            scelerisque turpis sed etiam ultrices. Blandit mollis dignissim
            egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu
            augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies
            sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum
            sed tellus ullamcorper arcu.{" "}
          </p>
          <DropdownMenuSeparator />
          <h2 className="text-base font-bold text-[#5001A8] my-4">
            Experiência profissional
          </h2>
          <p className="mb-4">
            Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non
            scelerisque turpis sed etiam ultrices.{" "}
          </p>
          <DropdownMenuSeparator />
          <section>
            <div className="my-4 text-slate-400">Seus Interesses</div>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
                Tag
              </div>
              <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
                Tag
              </div>
              <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
                Tag
              </div>
              <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
                Tag
              </div>
              <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
                Tag
              </div>
            </div>
          </section>
        </div>
        <div className="w-[73.6%] ">
          <TabNavigator
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={["anúncios", "historico de trocas", "itens salvos"]}
          />
          {activeTab === "anúncios" ? (
            <div className="grid grid-cols-3 min-w-[240px] gap-4 mt-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[240px] h-[240px] flex-shrink-0 bg-gray-200 rounded-lg">
                    <div className="m-2 flex items-center w-12 h-3 p-4 text-sm bg-blue-200 rounded-lg">
                      Tag
                    </div>
                  </div>
                  <p className="mt-2 font-bold text-[#454056]">
                    Berlin Paris Londres
                  </p>
                </div>
              ))}
            </div>
          ) : activeTab === "historico de trocas" ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-black text-center font-thin font-sans text-xl leading-140%">
                  ops! você ainda não realizou nenhuma troca
                </p>
                <Link href={"/feed/announcement"}>
                  <Button
                    className=" w-[180px] mt-2 border-[#4934d5] border-2 rounded-lg"
                    variant={"ghost"}
                  >
                    criar anúncio
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 min-w-[240px] gap-4 mt-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[240px] h-[240px] flex-shrink-0 bg-gray-200 rounded-lg">
                    <div className="m-2 flex items-center w-12 h-3 p-4 text-sm bg-blue-200 rounded-lg">
                      Tag
                    </div>
                  </div>
                  <p className="mt-2 font-bold  text-[#454056]">Oslo Norway</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
