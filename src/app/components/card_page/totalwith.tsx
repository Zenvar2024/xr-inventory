import React from "react";
import {Card, CardBody, Image, Button, Slider, CardFooter, CardHeader} from "@nextui-org/react";
import formInput from "@/app/withdraw/form/form";



export default function TotalWithdraw() {


  return (
    <div>
                <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                    </CardHeader>
                <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-[350px] h-full scale-125 -translate-y-6 object-cover"
                        src="/water.jpg"
                />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                <Button   as={formInput}  >
                           
                </Button>
                    </CardFooter>
                </Card>
            </div>


    
  );
}
