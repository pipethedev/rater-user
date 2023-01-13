import React, { useContext, useState } from "react";
import SignupImage from "../assets/signup.svg";
import InputContainer from "../components/InputContainer";
import countries from "../countries.json";
import { RaterContext } from "../App";
import Axios from "axios";
import { useNavigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";

export interface Country {
  name?: string;
  dial_code?: string;
  code?: string;
}

export interface SignupValues {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  email?: string;
  password?: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const { baseUrl } = useContext(RaterContext);

  const [conCode, setconCode] = useState<string>("+234");
  const [firstname, setfirstname] = useState<string>();
  const [lastName, setlastName] = useState<string>();
  const [email, setemail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [mobileNo, setmobileNo] = useState<string>();

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  const [timer, settimer] = useState(3);
  const handleSignUp = async () => {
    if (firstname && lastName && email && password && mobileNo) {
      await Axios.post(`${baseUrl}api/v1/auth/register`, {
        first_name: firstname,
        last_name: lastName,
        phone_number: mobileNo,
        email: email,
        password: password,
      })
        .then((res) => {
          console.log(res.data.message);

          toast.success(`Successful! Redirecting in ${timer}!`);
          setInterval(() => settimer(timer - 1), 1000);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          toast.error("An error occured.");
        });
    } else {
      toast.error("Please fill all the fields.");
    }
  };

  return (
    <div>
      <div className="w-screen h-screen p-0 m-0 overflow-x-hidden flex">
        <Toaster position="top-left" reverseOrder={true} />
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
              <InputContainer
                labelText="Firstname"
                type="text"
                onChange={(e) => setfirstname(e.target.value)}
              />
            </div>
            <div className="w-[50%] max-sm:w-full">
              <InputContainer
                labelText="Lastname"
                type="text"
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <InputContainer
              type="email"
              labelText="Email Address"
              onChange={(e) => setemail(e.target.value)}
            />
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
                onChange={(e) => setconCode(e.target.value)}
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
                  onChange={(e) => setmobileNo(conCode + e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <InputContainer
              type="password"
              labelText="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
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
            <button
              className="text-base font-semibold text-[white] flex justify-center items-center bg-[#3B71F7] rounded-[64px] h-[56px] w-[228px]"
              onClick={handleSignUp}
            >
              Get Started
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Signup;
