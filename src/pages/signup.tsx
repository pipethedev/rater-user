import React, { useContext, useState } from "react";
import SignupImage from "../assets/signup.svg";
import InputContainer from "../components/InputContainer";
import { RaterContext } from "../App";
import Axios from "axios";
import { useNavigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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

  const [firstname, setfirstname] = useState<string>();
  const [lastName, setlastName] = useState<string>();
  const [email, setemail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [mobileNo, setmobileNo] = useState<string>();
  const [loading, setloading] = useState(false);

  const handleSignUp = async () => {
    setloading(true);
    if (firstname && lastName && email && password && mobileNo) {
      await Axios.post(`${baseUrl}api/v1/auth/register`, {
        first_name: firstname,
        last_name: lastName,
        phone_number: mobileNo,
        email: email,
        password: password,
      })
        .then((res) => {
          toast.success(`Successful! Redirecting to Login!`);
          setloading(false);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((err) => {
          // console.log(err);
          toast.error("Unable to signup.");
          setloading(false);
        });
    } else {
      toast.error("Please fill all the fields.");
      setloading(false);
    }
  };

  return (
    <div>
      <div className="w-screen h-screen p-0 m-0 overflow-x-hidden flex">
        <Toaster position="top-right" reverseOrder={true} />
        <section className="bg-[#3B71F7] w-[60%] h-full relative max-md:hidden">
          <img
            src={SignupImage}
            alt=""
            className="absolute right-0 top-0 h-[100%]"
          />
        </section>
        <section className="w-[40%] max-md:w-full px-10 py-16 gap-5 flex flex-col relative">
          {loading ? (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
              {" "}
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            </div>
          ) : null}
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
                onChange={(e: any) => setfirstname(e.target.value)}
              />
            </div>
            <div className="w-[50%] max-sm:w-full">
              <InputContainer
                labelText="Lastname"
                type="text"
                onChange={(e: any) => setlastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <InputContainer
              type="email"
              labelText="Email Address"
              onChange={(e: any) => setemail(e.target.value)}
            />
          </div>{" "}
          <div className="flex flex-col gap-2">
            {" "}
            <label
              htmlFor=""
              className="text-sm text-[#02123B] font-semibold tracking-[-0.01em]"
            >
              Mobile Number
            </label>
            <PhoneInput
              country={"us"}
              value={mobileNo}
              onChange={setmobileNo}
              inputStyle={{
                borderRadius: "64px",
                width: "100%",
                height: "64px",
                fontWeight: "500",
                color: "#261C40",
              }}
              buttonStyle={{
                borderRadius: "64px 0 0 64px",
              }}
            />
          </div>
          <div>
            <InputContainer
              type="password"
              labelText="Password"
              onChange={(e: any) => setpassword(e.target.value)}
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
