import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

interface TProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: TProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex  ">{children}</div>
      <Footer />
    </div>
  );
}