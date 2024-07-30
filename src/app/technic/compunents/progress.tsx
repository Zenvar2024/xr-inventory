import { Button, ButtonGroup } from "@nextui-org/button"
import { CardHeader, CardFooter, Card,Image, DatePicker, CalendarDate } from "@nextui-org/react"





export default function Progress() {


    return (
            <div>
                <Card isFooterBlurred className="w-[300px] h-[150px] ">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Done</p>
                        <h4 className="text-black font-medium text-2xl">JOP IS FINISH</h4>
                    </CardHeader>
                        
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-white text-tiny">Tuesday, July 30, 2567.</p>
                            
                            <p className="text-white text-tiny">Customer Service.</p>
                        </div>
                        <ButtonGroup className="gap-1">
                            <Button className="text-tiny" color="success" radius="full" size="sm">
                                Confirm</Button>
                            <Button className="text-tiny" color="danger" radius="full" size="sm">
                                Cancle</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
            

    )
}




