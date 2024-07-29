"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { staffs } from "@/constants/staff";
import Swal from "sweetalert2";

export default function Login() {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [input, setInput] = React.useState("");
  const handleLogin = () => {
    console.log("Login with ID: ", input);

    const staffMember = staffs.find((staff) => staff.employee_id === input);
    
  

    if (staffMember) {
      const level = staffMember.position !== "Customer Support" ? 2 : 1;
      console.log(`Welcome, You are level ${level}`, staffMember.name);
      onOpenChange();
        
      Swal.fire({
        position: "center",
        icon: "success",
        title:staffMember.position ,
        text: staffMember.name   ,
        showConfirmButton: false,
        timer: 1800
      });

    } else {
      
          Swal.fire({
          title: "INVAILD ID",
          text: "Try Again Empeo ID !!",
          icon: "error"
        });



      }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="ghost">
        Login
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="ID"
                  placeholder="Enter your empeo ID"
                  variant="bordered"
                  className="text-black"
                  onChange={(e) => setInput(e.target.value)}
                />

                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
