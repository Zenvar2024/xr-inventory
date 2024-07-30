"use client";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Tablewater from "../components/table/table";

export default function WithdrawPage() {
  const user = true;

  return (
    <div>
      <div className="flex justify-between px-10 py-5 ">
        <div className="self-center font-bold "> Water&Cool Cloth</div>
        {user && (
          <Button as={Link} color="default" href="#" variant="ghost">
            Add
          </Button>
        )}
      </div>
      <Tablewater />
    </div>
  );
}
