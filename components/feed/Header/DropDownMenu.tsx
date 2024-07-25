"use client";

import React, { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { CircularProgress } from "@nextui-org/react";
import { SignOffAction } from "@/actions/auth";
import Link from "next/link";

type PropsType = {
  email: string;
  children: React.ReactNode;
};
export default function DropDownMenu(props: PropsType) {
  // const authUser = await getAuthUser();
  // const userEmail = authUser?.email;
  // const signOutAndRedirect = async () => {
  //   "use server";
  //   await SignOffAction("/login");
  // };
  let [isPending, startTransition] = useTransition();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/user/perfil"}>
          <DropdownMenuItem className="cursor-pointer">
            Meu perfil
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href={"/user/perfil/editProfile"}>
          <DropdownMenuItem className="cursor-pointer">
            Editar perfil
          </DropdownMenuItem>
        </Link>
        {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <form
          action={() =>
            startTransition(async () => {
              await SignOffAction("/login");
            })
          }
        >
          <button className="w-full cursor-pointer">
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex gap-2">
                {isPending && (
                  <CircularProgress
                    classNames={{
                      svg: "w-[20px] h-[20px]",
                    }}
                    aria-label="Loading..."
                  />
                )}
                <div>Log out</div>
              </div>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
