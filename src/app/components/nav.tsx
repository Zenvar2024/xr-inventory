import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import Login from "./login";
import { Image } from "@nextui-org/react";




export default function NavbarH() {


    return (

<Navbar >

<NavbarBrand className="">
  <Image src="/logoxr.png" width={60}></Image>
  <p className="font-bold">XR TECH THAILAND</p>
</NavbarBrand>

<NavbarContent className="flex justify-evenly gap-10"  >
  <NavbarItem>
    <Link color="foreground" href="/witdraw">Withdraw</Link>
  </NavbarItem>
  <NavbarItem>
    <Link color="foreground" href="/ticket">Gameticket</Link>
  </NavbarItem>
  <NavbarItem >
    <Link color="foreground" href="/stock" >Stock</Link>
  </NavbarItem>
  <NavbarItem>
    <Link color="foreground" href="/tacni">Tacnical</Link>
  </NavbarItem>

</NavbarContent>

<NavbarContent justify="end">
  <NavbarItem>
    <Button as={Login} color="primary" href="#" variant="ghost"></Button>
  </NavbarItem>
</NavbarContent>
</Navbar>
    )
}