import React from "react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import PostDropDownMenu from "@/components/feed/PostCardMobile/PostDropDownMenu";
import { AuthUserType, SignOffAction, getAuthUser } from "@/actions/auth";
import NavBarComponentNew from "./NavBarComponent";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";

const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarComponent = ({ user }: { user: AuthUserType }) => {
  const logoff = async () => {
    "use server";
    await SignOffAction();
  };
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Camboo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
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
        </NavbarItem>
      </NavbarContent>
      {user === null ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <>
          <PostDropDownMenu
            MenuTriggerComponent={
              <Avatar
                className="cursor-pointer"
                isBordered
                radius="lg"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
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
              <form action={logoff}>
                <DropdownMenuItem className="text-red-600">
                  <button className="w-full h-full">Sair</button>
                </DropdownMenuItem>
              </form>
            </DropdownMenuGroup>
          </PostDropDownMenu>
        </>
      )}
    </Navbar>
  );
};

export default async function FeedNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authUser = await getAuthUser();
  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="flex flex-col flex-1 max-w-2xl mx-auto bg-white min-h-screen shadow-xl">
          <NavBarComponentNew user={authUser} />
          {children}
        </div>
      </section>
    </>
  );
}
