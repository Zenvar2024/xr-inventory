import { Button } from "@nextui-org/button";
import Login from "./login";
import Swal from "sweetalert2";




export default function AlertID(){
    const handlerClick = () =>{
        
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question"
        });

    }


    return(
        <div>

     <Button> 
            handlerClick();
     </Button>
            
          
          

         
            </div>

    );



}