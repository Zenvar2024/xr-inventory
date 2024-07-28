import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader,Image, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Newjop from "./compunents/jop";
import Progress from "./compunents/progress";
import Finishjop from "./compunents/finished";






export default function Tacnicalpage() {


    return (
            <div className="flex justify-evenly gap-5 py-5">
                <Newjop/> <Progress />    <Finishjop/>
             
            </div>

    )
}