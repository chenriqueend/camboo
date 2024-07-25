import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Link from "next/link";
import { ComboboxDropdownMenu } from "./ComboBoxMenu";
import EnterNewCommentsInput from "@/components/comments/EnterNewCommentsInput";

export default function PostCard() {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl mb-6">
      <section>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 p-1 rounded-full cursor-pointer bg-blue-gray-100 ">
              <img className="rounded-full" src="/assets/profilePic.jpeg" />
            </div>
            <div>
              <div className="font-semibold">Rodrigo Martins</div>
              <div className="text-xs text-slate-400">Há 2 horas</div>
            </div>
          </div>
          <div>
            <ComboboxDropdownMenu />
          </div>
        </div>
      </section>
      <section className="my-4">
        <div>
          <Link href="/feed/detail">
            <h3 className="mb-2 text-[1em] font-bold">
              Mercedes-Benz E 400 Cabriolet
            </h3>
            <h5 className="text-[.9em] font-light">
              desrcrição do produto Lorem ipsum dolor sit amet consectetur.
              Elementum risus tempor at vivamus curabitur viverra diam nec.
            </h5>
          </Link>
        </div>
        <div className="flex w-full gap-1 mt-3">
          <div className="w-[50%] flex flex-col gap-1">
            <div className="w-full h-[303px] rounded-lg bg-blue-gray-100">
              <img
                src={"https://img.olx.com.br/images/61/614473659788962.jpg"}
                alt="luxuous car"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-1">
            <div className="h-[150px] rounded-lg  bg-blue-gray-100">
              <img
                src={"https://img.olx.com.br/images/62/626428652566726.jpg"}
                alt="luxuous car"
                className="rounded-lg"
              />
            </div>

            {/* <div className="h-[150px] rounded-lg  bg-blue-gray-100">
              <img
                src={
                  "https://www.mercedes-fans.de/thumbs/lib/68/98/07/o_wide/79868.jpg"
                }
                alt="luxuous car"
                className=""
              />
            </div> */}
          </div>
        </div>
      </section>
      <section className="comments">
        <EnterNewCommentsInput />
      </section>
    </div>
  );
}
