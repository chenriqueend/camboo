"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

type Props = {
  children: React.ReactNode;
  MenuTriggerComponent?: React.ReactNode;
};
export default function PostDropDownMenu(props: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col items-start">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          {props.MenuTriggerComponent === undefined ? (
            <Button variant="ghost" size="sm">
              <DotsHorizontalIcon />
            </Button>
          ) : (
            props.MenuTriggerComponent
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {props.children}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
