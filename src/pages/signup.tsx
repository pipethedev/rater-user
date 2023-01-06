import React from "react";
import SignupImage from "../assets/signup.svg";
import InputContainer from "../components/InputContainer";
import countries from "../countries.json";

export interface Country {
  name?: string;
  dial_code?: string;
  code?: string;
}

const Signup = () => {
  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }
  return (
    <div>
      <div className="w-screen h-screen p-0 m-0 overflow-x-hidden flex">
        <section className="bg-[#3B71F7] w-[60%] h-full relative max-md:hidden">
          <img
            src={SignupImage}
            alt=""
            className="absolute right-0 top-0 h-[100%]"
          />
        </section>
        <section className="w-[40%] max-md:w-full px-10 py-16 gap-5 flex flex-col">
          <section>
            <div className="font-medium text-base text-[#02123B]">
              Hi there Super Star
            </div>
            <div className="text-[#3B71F7] font-semibold text-[40px] max-sm:text-[30px]">
              Create an Account
            </div>
          </section>
          <div className="flex w-full max-sm:flex-wrap gap-4">
            <div className="w-[50%] max-sm:w-full">
              <InputContainer labelText="Firstname" type="text" />
            </div>
            <div className="w-[50%] max-sm:w-full">
              <InputContainer labelText="Lastname" type="text" />
            </div>
          </div>
          <div>
            <InputContainer type="email" labelText="Email Address" />
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <label
              htmlFor=""
              className="text-sm text-[#02123B] font-semibold tracking-[-0.01em]"
            >
              Mobile Number
            </label>
            <div className="flex w-full gap-4">
              <select
                name=""
                id=""
                className={`focus:border-[#3B71F7] border-[1px] border-[#CCCCCC] rounded-[64px] h-[54px] w-[22%] max-sm:w-[35%] outline-none font-medium text-[#261C40] text-base`}
              >
                {countries.map((country: Country) => {
                  return (
                    <option value={country.dial_code}>
                      {getFlagEmoji(country.code)} {country.dial_code}
                    </option>
                  );
                })}
              </select>
              <div className="w-[78%]">
                <input
                  type="text"
                  className={`focus:border-[#3B71F7] border-[1px] border-[#CCCCCC] rounded-[64px] h-[54px] p-4 w-full outline-none font-medium text-[#261C40] text-base`}
                />
              </div>
            </div>
          </div>
          <div>
            <InputContainer type="password" labelText="Password" />
          </div>
          <div className="full flex gap-3">
            <input type="checkbox" name="" id="t&c" />
            <label htmlFor="t&c" className="font-medium text-sm">
              Checking this box shows that you agree with the{" "}
              <span className="text-[#3B71F7]">terms and conditions</span> of
              Music Rater
            </label>
          </div>
          <section className="w-full">
            <button className="text-base font-semibold text-[white] flex justify-center items-center bg-[#3B71F7] rounded-[64px] h-[56px] w-[228px]">
              Get Started
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Signup;
