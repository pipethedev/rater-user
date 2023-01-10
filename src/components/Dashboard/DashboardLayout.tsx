import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }: any) => {
  const navRef = useRef();
  useEffect(() => {
    console.log(navRef.current);
  }, []);
  return (
    <div className="w-screen h-screen flex">
      <Navbar navRef={navRef} />
      <div className="py-8 px-8 ml-[280px] max-md:ml-0 w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
