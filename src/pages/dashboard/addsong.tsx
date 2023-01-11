import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import InputContainer from "../../components/InputContainer";
import { RaterContext } from "../../App";
import Axios from "axios";

const addsong = () => {
  const [audio, setaudio] = useState();
  const [title, settitle] = useState();
  const { baseUrl } = useContext(RaterContext);
  const [fileName, setfileName] = useState("No file selected");
  function handleChange(event) {
    console.log(`Selected file - ${event.target.files[0].name}`);
    setfileName(event.target.files[0].name);
    console.log(event.target.files[0]);
  }
  const navigate = useNavigate();
  const [steps, setsteps] = useState(1);

  const mytoken = localStorage.getItem("token");

  useEffect(() => {
    Axios.post(
      `${baseUrl}api/v1/song/upload`,
      { audio: audio, title: title, payment_reference: "samotestreference" },
      {
        headers: {
          Authorization: `Bearer ${mytoken}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <DashboardLayout>
      <div className="w-full flex justify-between items-center h-[58px] mb-6">
        <div className="flex flex-col justify-between h-full">
          <div className="text-[28px] font-semibold text-[black] px-3">
            Add Music
          </div>
          <div className="text-[#888888] font-medium text-sm px-3">
            Add your music to the platform
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center border-t-[1px] border-b-[1px] border-[#e0dcdc] py-4 w-full">
        <div
          onClick={() => navigate("/dashboard/home")}
          className="cursor-pointer text-sm font-medium text-[#888888]"
        >
          Dashboard
        </div>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 8.5L4.75 5L1.25 1.5"
            stroke="#FFC94C"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          onClick={() => navigate("/dashboard/library")}
          className="cursor-pointer text-sm font-medium text-[#888888]"
        >
          Library
        </div>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 8.5L4.75 5L1.25 1.5"
            stroke="#FFC94C"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-[#3B71F7] font-semibold text-sm">Add Music</div>
      </div>
      <section className="w-full flex max-md:flex-wrap mt-10 gap-8">
        <div className="w-[30%] max-md:w-full flex flex-col gap-4">
          {steps == 1 ? (
            <>
              <div className="w-full max-md:w-[300px] h-[73px] border-[#3b71f7] rounded-xl bg-[white] border-2 flex items-center px-4 gap-4">
                <div className="w-[32px] h-[32px] rounded-[50%] bg-[#3b71f7] flex items-center justify-center font-semibold text-[white]">
                  1
                </div>
                <div className="font-semibold text-[#02123B]">Make Payment</div>
              </div>
              <div className="w-full max-md:w-[300px] h-[73px] border-[#E7EDFE] rounded-xl bg-[white] border-2 flex items-center px-4 gap-4">
                <div className="w-[32px] h-[32px] rounded-[50%] bg-[#E7EDFE] text-[#3b71f7] flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="font-semibold text-[#02123B]">
                  Upload your song
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full max-md:w-[300px] h-[73px] border-[#E7EDFE] rounded-xl bg-[white] border-2 flex items-center px-4 gap-4">
                <div className="w-[32px] h-[32px] rounded-[50%] bg-[#E7EDFE] text-[#3b71f7] flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="font-semibold text-[#02123B]">Make Payment</div>
              </div>{" "}
              <div className="w-full max-md:w-[300px] h-[73px] border-[#3b71f7] rounded-xl bg-[white] border-2 flex items-center px-4 gap-4">
                <div className="w-[32px] h-[32px] rounded-[50%] bg-[#3b71f7] flex items-center justify-center font-semibold text-[white]">
                  2
                </div>
                <div className="font-semibold text-[#02123B]">
                  Upload your song
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-[70%] max-md:w-full bg-[#FFFAF0] rounded-[24px] h-[650px] flex justify-center items-center">
          <div className="w-[80%] h-[80%] bg-[white] rounded-2xl flex items-center justify-between p-8 flex-col">
            {steps == 1 ? (
              <>
                {" "}
                <div className="w-full flex flex-col items-center gap-6">
                  <div className="text-[24px] font-semibold text-[black] px-3 text-center">
                    Pay to Upload your Music
                  </div>
                  <div className="w-full h-[130px] max-md:h-[105px] max-sm:h-[90px] flex justify-center items-center bg-[#f5f8ff] rounded-xl">
                    <div className="text-[#02123b] font-bold text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                      ₦25,000.00
                    </div>
                  </div>
                  <div className="w-full bg-[#fff9f0] h-10 rounded-xl flex justify-center items-center font-semibold text-[#ff9900] text-center max-md:text-xs max-sm:text-[10px]">
                    This Payment only covers for the audio uploaded
                  </div>
                </div>
                <div
                  className="bg-[#3b71f7] rounded-[64px] w-full h-[56px] flex justify-center items-center font-semibold text-[white] cursor-pointer"
                  onClick={() => setsteps(2)}
                >
                  Proceed to Payment
                </div>{" "}
              </>
            ) : (
              <>
                <div className="w-full flex flex-col items-center gap-4">
                  <div className="flex flex-col w-full">
                    <div className="text-[#888888] font-medium text-sm">
                      Awesome
                    </div>
                    <div className="text-[24px] font-bold text-[black]">
                      Get that Sound Discovered
                    </div>
                  </div>
                  <InputContainer
                    labelText="Music Title"
                    type="text"
                    onChange={(e) => settitle(e.target.value)}
                  />
                  <div className="w-full text-center rounded-2xl h-[200px] mt-2">
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleChange}
                      accept="audio/mp3,audio/*;capture=microphone"
                    />
                    <label
                      htmlFor="dropzone-file"
                      className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center bg-white p-6 text-center"
                    >
                      <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_154_2416)">
                          <path
                            d="M54.669 5.25H17.334C16.7372 5.25 16.165 5.01295 15.743 4.59099C15.321 4.16903 15.084 3.59674 15.084 3C15.084 2.40326 15.321 1.83097 15.743 1.40901C16.165 0.987053 16.7372 0.75 17.334 0.75H54.669C55.2657 0.75 55.838 0.987053 56.26 1.40901C56.6819 1.83097 56.919 2.40326 56.919 3C56.919 3.59674 56.6819 4.16903 56.26 4.59099C55.838 5.01295 55.2657 5.25 54.669 5.25Z"
                            fill="#3B71F7"
                          />
                          <path
                            d="M60 14.25H12C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75H60C60.5967 9.75 61.169 9.98705 61.591 10.409C62.0129 10.831 62.25 11.4033 62.25 12C62.25 12.5967 62.0129 13.169 61.591 13.591C61.169 14.0129 60.5967 14.25 60 14.25Z"
                            fill="#3B71F7"
                          />
                          <path
                            d="M46.5 56.25C48.5711 56.25 50.25 54.5711 50.25 52.5C50.25 50.4289 48.5711 48.75 46.5 48.75C44.4289 48.75 42.75 50.4289 42.75 52.5C42.75 54.5711 44.4289 56.25 46.5 56.25Z"
                            fill="white"
                          />
                          <path
                            d="M63 18.75H9C6.81245 18.7516 4.71495 19.6213 3.16812 21.1681C1.62129 22.715 0.751589 24.8125 0.75 27V63C0.751589 65.1875 1.62129 67.285 3.16812 68.8319C4.71495 70.3787 6.81245 71.2484 9 71.25H63C65.1875 71.2484 67.285 70.3787 68.8319 68.8319C70.3787 67.285 71.2484 65.1875 71.25 63V27C71.2484 24.8125 70.3787 22.715 68.8319 21.1681C67.285 19.6213 65.1875 18.7516 63 18.75ZM54.75 52.5C54.75 54.1317 54.2661 55.7267 53.3596 57.0835C52.4531 58.4402 51.1646 59.4976 49.6571 60.122C48.1496 60.7464 46.4908 60.9098 44.8905 60.5915C43.2902 60.2731 41.8201 59.4874 40.6664 58.3336C39.5126 57.1798 38.7268 55.7098 38.4085 54.1095C38.0902 52.5092 38.2536 50.8504 38.878 49.3429C39.5024 47.8354 40.5598 46.5469 41.9165 45.6404C43.2733 44.7339 44.8683 44.25 46.5 44.25C47.8078 44.2587 49.0942 44.5828 50.25 45.195V31.095L33.75 33.45V55.5C33.75 57.1317 33.2661 58.7267 32.3596 60.0835C31.4531 61.4402 30.1646 62.4976 28.6571 63.122C27.1496 63.7464 25.4908 63.9098 23.8905 63.5915C22.2902 63.2731 20.8202 62.4874 19.6664 61.3336C18.5126 60.1798 17.7268 58.7098 17.4085 57.1095C17.0902 55.5092 17.2536 53.8504 17.878 52.3429C18.5024 50.8354 19.5598 49.5469 20.9165 48.6404C22.2732 47.7339 23.8683 47.25 25.5 47.25C26.8078 47.2587 28.0942 47.5829 29.25 48.195V31.5C29.2502 30.9583 29.4457 30.4347 29.8005 30.0254C30.1553 29.616 30.6458 29.3482 31.182 29.271L52.182 26.271C52.5025 26.2265 52.8289 26.2509 53.1392 26.3424C53.4496 26.434 53.7369 26.5907 53.982 26.802C54.2255 27.0129 54.4209 27.2736 54.555 27.5666C54.689 27.8595 54.7586 28.1778 54.759 28.5L54.75 52.5Z"
                            fill="#3B71F7"
                          />
                          <path
                            d="M25.5 59.25C27.5711 59.25 29.25 57.5711 29.25 55.5C29.25 53.4289 27.5711 51.75 25.5 51.75C23.4289 51.75 21.75 53.4289 21.75 55.5C21.75 57.5711 23.4289 59.25 25.5 59.25Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_154_2416">
                            <rect width="72" height="72" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </label>

                    <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                      {fileName}
                    </h2>

                    <p className="mt-2 text-gray-500 tracking-wide">
                      Click icon to Select Audio file from device
                    </p>
                  </div>
                </div>
                <div className="bg-[#3b71f7] rounded-[64px] w-full h-[56px] flex justify-center items-center font-semibold text-[white] cursor-pointer">
                  Upload Song
                </div>{" "}
              </>
            )}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default addsong;
