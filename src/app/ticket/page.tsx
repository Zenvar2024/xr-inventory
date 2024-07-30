'use client'
import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Gameticket from "../components/table/tablegame";





export default function Ticketpage() {


    return (
        <div>
                    <div className="flex justify-between px-10 py-5" >
                <div className=" self-center font-bold " >Games Ticket Requested</div>
                <Button   as={Link} color="default" href="#" variant="ghost">Add</Button>
                </div>
            <div className=""><Gameticket /></div>
        </div>

    )
}