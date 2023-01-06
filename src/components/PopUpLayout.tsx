import React from "react";

const PopUpLayout = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center gap-8 justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #F5F5F5 0%,#F5F5F5 50%,#3B71F7 50%,#3B71F7 100%)",
      }}
    >
      <div>me</div>
      <div className="bg-white w-[455px] h-[600px] rounded-[20px] max-md:w-[350px] max-md:h-[500px] max-sm:w-[300px] max-sm:h-[450px]"></div>
      <div className="text-[white] gap-4 flex items-center text-base font-medium">
        <div>FAQs</div>
        <div>Terms & Condition</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default PopUpLayout;
