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
    <Navbar maxWidth="full" className="bg-transparent" >
      <NavbarBrand>
        <Link href="/" className="">
          <Image src="/logoxr.png" width={60}></Image>
          <h2 className="text-base">  XR TECH THAILAND</h2>
        </Link>
      </NavbarBrand>
          <NavbarContent justify="end" className="gap-10" >
              
                <NavbarItem>
                    <Link color="foreground" href="/withdraw">
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
                    <Link color="foreground" href="/technic">
                      Technical
                    </Link>
                </NavbarItem>
            
                <NavbarItem>
                    <Button as={Login} color="primary" href="#" variant="ghost"></Button>
                </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
