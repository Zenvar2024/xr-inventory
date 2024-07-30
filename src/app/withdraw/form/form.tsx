import React from "react";
import {Button, DatePicker, Input, Radio, RadioGroup, useDisclosure} from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
   
    
   
    
  } from "@nextui-org/react";




export default function formInput() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selectedVariant, setSelectedName] = React.useState("solid")
    const Nickname =["P'Tar","Boom","Zen","Gus","Tonkla"];

    
  return (

    <><Button onPress={onOpen} className="text-tiny" color="primary" radius="full" size="sm">Add+</Button><Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
              {(onClose) => (
                  <>
                      <ModalHeader className="flex gap-3">Water & Cool cloth</ModalHeader>
                      <ModalBody>
                        
                           
                                
                                        
                                        
                             
                                

                       
                       


                      </ModalBody>
                      <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Cancle
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Save
                          </Button>
                      </ModalFooter>
                  </>
              )}
          </ModalContent>
      </Modal></>
    
  );
}



