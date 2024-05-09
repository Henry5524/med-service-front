import { useEffect, useState } from "react";
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "../assets/icons/AcmeLogo";
import { useRouter } from "next/router";

const menuItems = [
  { id: 1, name: "Главное", path: "/" },
  { id: 2, name: "О нас", path: "/about" },
  { id: 3, name: "Связаться с нами", path: "/contact-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const router = useRouter();

  console.log(active);

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  return (
    <NavbarUi
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="lg"
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <AcmeLogo />
          <p className="font-bold text-inherit">Med Service</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12">
        <NavbarBrand
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <AcmeLogo />
          <p className="font-bold text-inherit">Med Service</p>
        </NavbarBrand>

        {menuItems.map(({ id, name, path }) => (
          <NavbarItem key={`${id}-${name}`} isActive={active == path}>
            <Link color="foreground" href={`${path}`}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ id, name, path }) => (
          <NavbarMenuItem key={`${id}-${name}`} isActive={active == path}>
            <Link
              className="w-full"
              color="foreground"
              href={`${path}`}
              size="lg"
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUi>
  );
}
