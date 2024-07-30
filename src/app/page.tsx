'use client'
import React from "react";
import TotalWithdraw from "./components/card_page/totalwith";
import TotalStcok from "./components/card_page/totalstcok";
import Tacni from "./components/card_page/technicaljop";



export default function Home() {
   return (
      <div >
         <div className=" flex justify-evenly gap-5 py-5"><TotalWithdraw /> <TotalStcok/><Tacni />  </div>
         {/* <p className="relative flex justify-center py-5">zensitive 2024</p> */}



      </div>



   );
}
