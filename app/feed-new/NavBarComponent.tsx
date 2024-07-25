"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NextUILink,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  User,
} from "@nextui-org/react";

import { AuthUserType, DefaultSignOffAction } from "@/actions/auth";
import PostDropDownMenu from "@/components/feed/PostCardMobile/PostDropDownMenu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import UserAvatar from "./UserAvatar";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export default function NavBarComponentNew({ user }: { user: AuthUserType }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { label: "Meu Perfil", link: "#" },
    { label: "Novo Anúncio", link: "/feed-new/upload2" },
    { label: "Trocas em andamento", link: "#" },
    { label: "Chats", link: "#" },
    { label: "Sair", link: "#" },
  ];

  const horizontalMenuItems = [
    { label: "Novo Anúncio", link: "/feed-new/upload2" },
    { label: "Meus Anúncios", link: "#" },
    { label: "Salvos", link: "#" },
    { label: "Chats", link: "#" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {horizontalMenuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href={item.link}>{item.label}</Link>
          </NavbarItem>
        ))}
        {/* <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {user === null ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              {/* <Button as={Link} color="primary" href="#" variant="flat">
                <Link href="#">Sign Up</Link>
              </Button>
               */}
              <Link href="/login">Login</Link>
            </NavbarItem>
          </>
        ) : (
          <>
            <PostDropDownMenu
              MenuTriggerComponent={
                <>
                  <UserAvatar />
                </>
              }
            >
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  Ver Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Meus Anúncios
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Ofertas Salvas
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Trocas em realizadas
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <form action={DefaultSignOffAction}>
                  <DropdownMenuItem className="text-red-600">
                    <button className="w-full h-full">Sair</button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuGroup>
            </PostDropDownMenu>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.label}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
