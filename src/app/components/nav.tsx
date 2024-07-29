import { Button , ButtonGroup} from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import Login from "./login";
import { Image } from "@nextui-org/react";




export default function NavbarH() {


    return (

<Navbar maxWidth="full"  >

<NavbarBrand >
  <Link href="/">
    <Image  src="/logoxr.png"  width={60}  ></Image>
    <h1 className="font-bold">XR TECH THAILAND</h1>
  </Link>
</NavbarBrand>

<ButtonGroup   className="justify-evenly  "  >
  <Button>
    <Link  href="/witdraw">Withdraw</Link>
    </Button>
    <Button  >
    <Link  href="/ticket">Gameticket</Link>
    </Button>
    <Button >
    <Link  href="/stock" >Stock</Link>
    </Button>
    <Button >
    <Link className="color-#eab308" href="/tacni">Tacnical</Link>
  </Button>
</ButtonGroup>

<NavbarContent   justify="end"   >
  <NavbarItem >
    <Button as={Login} color="primary" href="#" variant="ghost"></Button>
  </NavbarItem>
</NavbarContent>

</Navbar>
    )
}