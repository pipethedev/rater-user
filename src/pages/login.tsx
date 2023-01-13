import React, { useContext, useState, useEffect } from "react";
import LoginImage from "../assets/login.svg";
import InputContainer from "../components/InputContainer";
import countries from "../countries.json";
import { useNavigate } from "react-router-dom";
import { RaterContext } from "../App";
import Axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export interface Country {
  name?: string;
  dial_code?: string;
  code?: string;
}

const Login = () => {
  const { baseUrl, settoken, token } = useContext(RaterContext);
  const navigate = useNavigate();

  const [email, setemail] = useState<string>();
  const [password, setpassword] = useState<string>();

  const mytoken = localStorage.getItem("token");
  useEffect(() => {
    if (mytoken) {
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    }
  }, []);

  const handleLogin = async () => {
    if (email && password) {
      await Axios.post(`${baseUrl}api/v1/auth/login`, {
        email: email,
        password: password,
      })
        .then((res) => {
          console.log(res.data.message);
          console.log(res.data.data.token);
          settoken(res.data.data.token);
          if (res.data.message) {
          }
          setTimeout(() => {
            navigate("/dashboard/home");
          }, 3000);
          localStorage.setItem("token", res.data.data.token);
          toast.success("Successfully logged in!");
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
        <Toaster position="top-left" reverseOrder={false} />
        <section className="w-[40%] max-md:w-full px-10 py-16 gap-5 flex flex-col">
          <section className="mb-6">
            <div className="font-medium text-base text-[#02123B]">
              Hi there Talented Human
            </div>
            <div className="text-[#02123B] font-semibold text-[40px]">
              Welcome Back
            </div>
          </section>

          <div>
            <InputContainer
              type="email"
              labelText="Email Address"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <InputContainer
              type="password"
              labelText="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="full flex gap-3">
            <input
              type="checkbox"
              name=""
              id="remember"
              className="w-[22px] h-[22px]"
            />
            <label htmlFor="remember" className="font-medium text-sm">
              Keep me signed in
            </label>
          </div>
          <section className="w-full mt-12">
            <button
              className="text-base font-semibold text-[white] flex justify-center items-center bg-[#3B71F7] rounded-[64px] h-[56px] w-[228px]"
              onClick={handleLogin}
            >
              Login to Dashboard
            </button>
          </section>
          <section className="flex gap-4 mt-10">
            <div className="text-lg font-medium text-[#666666]">
              No Account?
            </div>
            <div
              className="flex text-[#3B71F7] gap-4 items-center text-base font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create One
              <svg
                width="56"
                height="12"
                viewBox="0 0 56 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.495 6.49497C56.7683 6.22161 56.7683 5.77839 56.495 5.50503L52.0402 1.05025C51.7668 0.776886 51.3236 0.776886 51.0503 1.05025C50.7769 1.32362 50.7769 1.76684 51.0503 2.0402L55.0101 6L51.0503 9.9598C50.7769 10.2332 50.7769 10.6764 51.0503 10.9497C51.3236 11.2231 51.7668 11.2231 52.0402 10.9497L56.495 6.49497ZM0 6.7H28V5.3H0V6.7ZM28 6.7H56V5.3H28V6.7Z"
                  fill="#3B71F7"
                />
              </svg>
            </div>
          </section>
        </section>
        <section className="bg-[#FFC94C] w-[60%] h-full relative max-md:hidden">
          <img
            src={LoginImage}
            alt=""
            className="absolute left-0 top-0 h-[100%]"
          />
        </section>
      </div>
    </div>
  );
};

export default Login;
