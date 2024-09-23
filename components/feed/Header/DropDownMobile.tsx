"use client";
import { useState } from "react";
import Link from "next/link";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaUserAltSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { Button } from "@/components/ui/button";

interface DropDownMobileProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const DropDownMobile: React.FC<DropDownMobileProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <div className="md:hidden relative">
      <button
        className="text-white p-2 bg-dark-blue-gradient rounded-lg"
        onClick={toggleMenu}
      >
        {isOpen ? "Fechar" : "Menu"}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg w-48 p-4 z-10">
          <Link href="/feed" className="block py-2">
            Home
          </Link>
          <Link href="/feed/announcement" className="block py-2">
            Criar anúncio
          </Link>
          <div className="block py-2">
            <div className="flex items-center gap-1">
              <SlLocationPin />
              <span>Recife, PE</span>
              <BsFillCaretDownFill size=".8em" />
            </div>
          </div>
          <div className="flex items-center gap-2 py-2">
            <LiaUserAltSolid size="1.5em" />
            <span>Perfil</span>
          </div>
          <div className="flex items-center gap-2 py-2">
            <IoIosNotificationsOutline size="1.5em" />
            <span>Notificações</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMobile;
