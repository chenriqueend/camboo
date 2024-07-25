import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { BsFillCaretDownFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { LiaUserAltSolid } from "react-icons/lia";
import Link from "next/link";
import { useState } from "react";
import { SignOffAction, getAuthUser } from "@/actions/auth";
import DropDownMenu from "./DropDownMenu";
import { IoIosNotificationsOutline } from "react-icons/io";
import DropDownNotifications from "./DropDownNotifications";

const SearchBar = () => {
  return (
    <div className="flex justify-center w-[500px] gap-3 h-10 bg-white rounded-lg shadow-md">
      <img
        style={{ margin: "auto", marginLeft: "8px" }}
        src="/assets/header/search_icon.svg"
      />
      <input
        className="w-full h-full bg-transparent border-none outline-none focus:ring-0"
        type="text"
        placeholder="Pesquisar"
      />
    </div>
  );
};

const LocationPicker = () => {
  return (
    <div className="flex items-center gap-4 text-slate-400">
      <div className="flex items-center gap-1 font-light">
        <SlLocationPin />
        <span>Recife, PE</span>
        <BsFillCaretDownFill className="ml-1" size=".8em" />
      </div>
    </div>
  );
};

const CriarAnuncioButton = () => {
  return (
    <div className="flex items-center justify-center h-10 font-light">
      <Button
        hasLink={true}
        linkURL={"/feed/announcement"}
        textButton={"Criar anúncio"}
        variant="ghost"
        className="w-full p-0"
      ></Button>
    </div>
  );
};

const PerfilArea = () => {
  return (
    <div className="flex items-center justify-center h-10 gap-2 font-light">
      <Link href="/login">
        <div className="flex items-center justify-center w-10 h-10 p-2 bg-dark-blue-gradient hover:opacity-90 border border-gray-300 rounded-full cursor-pointer ">
          <LiaUserAltSolid size="1.5em" className="text-white" />
        </div>
      </Link>
    </div>
  );
};

const NotifyArea = () => {
  return (
    <div className="flex">
      <div className="h-full mx-4 border-r border-[#D1D8DB]" />
      <div className="relative flex items-center justify-center w-10 h-10 p-2 bg-dark-blue-gradient hover:opacity-90 border border-gray-300 rounded-full cursor-pointer">
        <div className="absolute self-end transform translate-x-[120%] -translate-y-[180%] w-[10px] h-[10px] bg-red-500 rounded-full " />
        <IoIosNotificationsOutline size="2em" className="text-white" />
      </div>
    </div>
  );
};

export const Header = async () => {
  const authUser = await getAuthUser();
  const userEmail = authUser?.email || "";
  return (
    <div className="flex justify-center h-10 gap-4">
      <div className="w-[130px] h-[40px] relative">
        <Link href={"/feed"}>
          <Logo />
        </Link>
      </div>
      <SearchBar />
      <LocationPicker />
      <Button
        className="bg-dark-blue-gradient hover:opacity-90"
        hasLink={true}
        linkURL={"/feed"}
        textButton={"Home"}
      />
      <CriarAnuncioButton />
      <DropDownNotifications>
        <NotifyArea />
      </DropDownNotifications>
      <DropDownMenu email={userEmail}>
        <PerfilArea />
      </DropDownMenu>
    </div>
  );
};
