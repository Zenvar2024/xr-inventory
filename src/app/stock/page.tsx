'use client'
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import Tablestock from "../components/table/tablesstcok";





export default function Stockpage() {


    return (
                 
        <div>
                    <div className="flex justify-between px-10 py-5" >
                        <div className=" self-center font-bold " >Stock Water && Coolcloth</div>
                            <Button   as={Link} color="default" href="#" variant="ghost">Add</Button>
                    </div>
                        <div  > <Tablestock  /></div>
        </div>
            
    
        



    )
}