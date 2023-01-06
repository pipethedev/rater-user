import React from "react";

export type Input = {
  labelText: string;
  type: string;
};

const InputContainer = (Input: Input) => {
  return (
    <div className={`w-full flex flex-col items-start gap-1 font-grotesk`}>
      <label
        htmlFor="id"
        className="text-sm text-[#02123B] font-semibold tracking-[-0.01em]"
      >
        {Input.labelText}
      </label>
      <input
        id="id"
        type={Input.type}
        className={`focus:border-[#3B71F7] border-[1px] border-[#CCCCCC] rounded-[64px] h-[54px] p-4 w-full outline-none font-medium text-[#261C40] text-base`}
      />
    </div>
  );
};

export default InputContainer;
