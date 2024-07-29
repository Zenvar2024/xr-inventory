
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import NavbarH from "./components/nav";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XR-TECH",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  > <NextUIProvider  > 
        <div  className="w-full min-w-[100vw] min-h-screen overflow-y-scroll overflow-x-hidden  p-5">
             <NavbarH />
        {children}
        </div>
               </NextUIProvider></body>
    </html>
  );
}
