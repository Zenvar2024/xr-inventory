'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Login from "../login/login";


export default function Nav_Bar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "WithDraw",
    "GameTicket",
    "Stock",
    "Technical",
    
  ];

  return (
    <Navbar maxWidth="full" 
       isBordered
       isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
    >
  


      <NavbarContent className="hidden sm:flex gap-20 " justify="center">
        <NavbarBrand >
        <Link  href="/">
          <Image isZoomed src="/logoxr.png" width={70}  ></Image>
          <p   className="font-serif hover:font-mono text-white text-xl" > XR Tech</p>
          </Link>
        </NavbarBrand>
        <NavbarItem >
          <Link className="font-serif hover:font-mono" color="foreground" href="/withdraw"  >
          WithDraw
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link  className="font-serif hover:font-mono" color="foreground" href="/ticket">
          GameTicket
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  className="font-serif hover:font-mono" color="foreground" href="/stock">
          Stock
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  className="font-serif hover:font-mono" color="foreground" href="/technic">
          Technical
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pr-7" justify="end">
        
        <NavbarItem>
          <Button as={Login} color="default" href="#" variant="light">
          
          </Button>
        </NavbarItem>
      </NavbarContent>

      
    </Navbar>
  );
}
