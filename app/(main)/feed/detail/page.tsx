import EnterNewCommentsInput from "@/components/comments/EnterNewCommentsInput";
import ProfileBadge from "@/components/user/ProfileBadge";
import NavBreadcrumbs from "@/components/navigation/NavBreadcrumbs";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import BackBtn from "@/components/shared/BackBtn";

export default function DetailPage() {
  return (
    <div className="w-[75vw]">
      <section className="flex flex-col gap-4 p-0">
        <div className="flex col">
          <BackBtn path="/feed" />
          <NavBreadcrumbs />
        </div>

        <h1 className="text-[2em]">Mercedes-Benz E 400 Cabriolet</h1>
        <section className="flex w-full gap-4">
          <div className="flex flex-col w-8/12 gap-2 ">
            <div className="h-[300px] bg-blue-gray-50 rounded-lg"></div>
            <section className="flex gap-2">
              <div className="w-[150px] h-[150px] bg-blue-gray-50 rounded-lg"></div>
              <div className="w-[150px] h-[150px] bg-blue-gray-50 rounded-lg"></div>
              <div className="w-[150px] h-[150px] bg-blue-gray-50 rounded-lg"></div>
              <div className="w-[150px] h-[150px] bg-blue-gray-50 rounded-lg"></div>
            </section>
            <section className="my-4">
              <EnterNewCommentsInput />
            </section>
          </div>
          {/* bg-blue-gray-200 rounded-lg */}
          <div className="w-1/2">
            <section className="flex items-center gap-2 p-2 text-sm font-light">
              <ProfileBadge />
              <div>
                <h2>Rodrigo Martins</h2>
                <div className="flex items-center gap-1 text-[.8em]">
                  <AiFillStar className="text-blue-gray-900" />
                  <div>4.8</div>
                  <div className="h-3 border-r border-blue-gray-900"></div>
                  <div className="text-[.7rem] font-extralight">
                    4 trocas realizadas
                  </div>
                </div>
              </div>
            </section>
            <section className="flex gap-2 my-2">
              <div className="inline-flex items-center justify-center p-1 px-2 text-[.7em] bg-blue-200 rounded-lg">
                Item novo
              </div>
              <div className="inline-flex items-center justify-center p-1 px-2 text-[.7em] bg-blue-200 rounded-lg">
                Perto de você
              </div>
            </section>
            <section className="my-4 text-2xl font-bold">R$ 2000,00</section>
            <div className="my-4 border-b border-blue-gray-300"></div>
            <section className="flex flex-col gap-4">
              <button className="w-full p-1 text-sm text-white rounded-sm bg-gradient-to-b from-blue-900 to-blue-800">
                Mostrar Interesse
              </button>
              <button className="w-full p-1 text-sm text-blue-800 border border-blue-800 rounded-sm">
                Conversar com vendedor
              </button>
              <button className="w-full p-1 text-sm text-blue-800 border border-blue-800 rounded-sm">
                Sugerir nova troca
              </button>
            </section>
            <section className="mt-4 text-[.8em]">
              <h1 className="pb-2 text-base font-semibold">Overview</h1>
              <div>
                Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet
                non scelerisque turpis sed etiam ultrices. Blandit mollis
                dignissim egestas consectetur porttitor. Vulputate dolor
                pretium, dignissim eu augue sit ut convallis. Lectus est, magna
                urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id
                pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.
              </div>
            </section>
            <section className="mt-4 text-[.8em]">
              <h1 className="flex flex-col gap-2 pb-2 text-base font-semibold">
                Details
              </h1>
              <div>
                <label className="mr-1 font-semibold">Tamanho:</label>
                <span>Grande</span>
              </div>
              <div>
                <label className="mr-1 font-semibold">Tamanho:</label>
                <span>Grande</span>
              </div>
              <div>
                <label className="mr-1 font-semibold">Tamanho:</label>
                <span>Grande</span>
              </div>
            </section>
          </div>
        </section>
        {/* <EnterNewCommentsInput /> */}
      </section>
    </div>
  );
}
