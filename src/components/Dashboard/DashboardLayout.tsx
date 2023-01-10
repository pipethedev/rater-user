import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { RxHamburgerMenu } from "react-icons/rx";

const DashboardLayout = ({ children }: any) => {
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(navRef.current?.className);
  }, []);

  const show = () => {
    console.log(navRef.current?.className);
    if (navRef.current) {
      if (navRef.current.classList.contains("max-md:hidden")) {
        console.log("Element contains class");
        navRef.current.classList.remove("max-md:hidden");
      }
    }
  };
  return (
    <div className="w-screen h-screen flex">
      <div className="absolute top-4 left-4 hidden max-md:block" onClick={show}>
        <RxHamburgerMenu className="text-[20px] font-bold cursor-pointer" />
      </div>
      <Navbar navRef={navRef} />
      <div className="py-8 px-8 ml-[280px] max-md:ml-0 w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
