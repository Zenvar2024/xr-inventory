import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import Login from "./login";
import { Image } from "@nextui-org/react";

export default function NavbarH() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Link href="/">
          <Image src="/logoxr.png" width={60}></Image>
          <p className="font-bold">XR TECH THAILAND</p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className="gap-20">
        <NavbarItem>
          <Link color="foreground" href="/witdraw">
            Withdraw
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/ticket">
            Gameticket
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/stock">
            Stock
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/tacni">
            Tacnical
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Login} color="primary" href="#" variant="ghost"></Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
