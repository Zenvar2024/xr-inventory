'use client'
import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Gameticket from "../components/tablegame";





export default function Ticketpage() {


    return (
        <div>
        <Navbar>

            <NavbarBrand className="">
                <Image src="/logoxr.png" width={60}></Image>
                <Link className="font-bold" href="/" >XR TECH THAILAND</Link>
            </NavbarBrand>

            <NavbarContent className="flex justify-evenly gap-10">
                <NavbarItem>
                    <Link color="foreground" href="/witdraw">Withdraw</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/ticket">Gameticket</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/stock">Stock</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/tacni">Tacnical</Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="ghost"></Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

        <Gameticket/>
        </div>

    )
}