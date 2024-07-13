'use client'
import React from "react";
import { Link, Button} from "@nextui-org/react";
import Tablewater from "./components/table";
import Total from "./components/totalwater";
import Totalcool from "./components/totalcool";
import Gameticket from "./components/tablegame";
import BackVi from "./components/bgvi";
import Tacni from "./components/technical";
import NavbarH from "./components/nav";


export default function Home() {
  return (
    <div >

      <BackVi/>
       <NavbarH/>

      <div className=" flex justify-evenly gap-5 p-5"><Total /> <Totalcool /><Tacni />  </div>

      <div className="relative flex justify-between px-10" >
        <div className="self-center font-bold " > Water&Cool Cloth</div>
        <Button   as={Link} color="primary" href="#" variant="ghost">Add</Button>
      </div>
      <div className="p-3"><Tablewater /></div>

      <div className="relative flex justify-between   px-10" >
        <div className=" self-center font-bold " >Games Ticket Requested</div>
        <Button   as={Link} color="primary" href="#" variant="ghost">Add</Button>
      </div>
      <div className="p-3"><Gameticket /></div>
       <p className="relative flex justify-center py-5">zensitive 2024</p>
      
    
       
    </div>



 );
}
