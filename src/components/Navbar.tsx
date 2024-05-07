import { useState } from "react";
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

const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact us", path: "/contact-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Med Service</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Med Service</p>
        </NavbarBrand>

        {menuItems.map(({ id, name, path }) => (
          <NavbarItem key={`${id}-${name}`}>
            <Link color="foreground" href={`${path}`}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ id, name, path }) => (
          <NavbarMenuItem key={`${id}-${name}`}>
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
