import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { useNavigate } from "react-router";
import { RaterContext } from "../../App";
import Axios from "axios";

const Profile = () => {
  const { baseUrl, token } = useContext(RaterContext);

  const mytoken = localStorage.getItem("token");

  // console.log(token);

  const [user, setuser] = useState<any>();

  useEffect(() => {
    if (mytoken == null) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    Axios.get(`${baseUrl}api/v1/user/profile`, {
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        console.log(res);
        setuser(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const svgDollar = () => {
    return (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#E0FFF6" />
        <path
          d="M18.5 25.7C18.5 23.1798 18.5 21.9196 18.9905 20.957C19.4219 20.1103 20.1103 19.4219 20.957 18.9905C21.9196 18.5 23.1798 18.5 25.7 18.5H38.3C40.8202 18.5 42.0804 18.5 43.043 18.9905C43.8897 19.4219 44.5781 20.1103 45.0095 20.957C45.5 21.9196 45.5 23.1798 45.5 25.7V33.8C45.5 36.3202 45.5 37.5804 45.0095 38.543C44.5781 39.3897 43.8897 40.0781 43.043 40.5095C42.0804 41 40.8202 41 38.3 41H28.5256C27.5895 41 27.1215 41 26.6738 41.0919C26.2766 41.1734 25.8923 41.3082 25.5312 41.4927C25.1243 41.7006 24.7588 41.993 24.0278 42.5777L20.4496 45.4403C19.8255 45.9396 19.5134 46.1892 19.2508 46.1895C19.0224 46.1898 18.8063 46.0859 18.6638 45.9074C18.5 45.7022 18.5 45.3025 18.5 44.5033V25.7Z"
          fill="#00C288"
        />
        <path
          d="M24.5 26.75H32M24.5 32H36.5M28.5256 41H38.3C40.8202 41 42.0804 41 43.043 40.5095C43.8897 40.0781 44.5781 39.3897 45.0095 38.543C45.5 37.5804 45.5 36.3202 45.5 33.8V25.7C45.5 23.1798 45.5 21.9196 45.0095 20.957C44.5781 20.1103 43.8897 19.4219 43.043 18.9905C42.0804 18.5 40.8202 18.5 38.3 18.5H25.7C23.1798 18.5 21.9196 18.5 20.957 18.9905C20.1103 19.4219 19.4219 20.1103 18.9905 20.957C18.5 21.9196 18.5 23.1798 18.5 25.7V44.5033C18.5 45.3025 18.5 45.7022 18.6638 45.9074C18.8063 46.0859 19.0224 46.1898 19.2508 46.1895C19.5134 46.1892 19.8255 45.9396 20.4496 45.4403L24.0278 42.5777C24.7588 41.993 25.1243 41.7006 25.5312 41.4927C25.8923 41.3082 26.2766 41.1734 26.6738 41.0919C27.1215 41 27.5895 41 28.5256 41Z"
          stroke="#E0FFF6"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const svgStar = () => {
    return (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#FFF6E0" />
        <path
          d="M29.8126 18.7322C30.5011 16.6132 33.4989 16.6132 34.1874 18.7322L35.9739 24.2304C36.2818 25.1781 37.1649 25.8197 38.1613 25.8197H43.9425C46.1705 25.8197 47.0969 28.6708 45.2944 29.9804L40.6173 33.3785C39.8112 33.9641 39.4739 35.0023 39.7818 35.9499L41.5683 41.4481C42.2568 43.5671 39.8315 45.3292 38.0289 44.0196L33.3519 40.6215C32.5458 40.0359 31.4542 40.0359 30.6481 40.6215L25.9711 44.0196C24.1685 45.3292 21.7432 43.5671 22.4317 41.4481L24.2182 35.9499C24.5261 35.0023 24.1888 33.9641 23.3827 33.3785L18.7056 29.9804C16.9031 28.6708 17.8295 25.8197 20.0575 25.8197H25.8387C26.8351 25.8197 27.7182 25.1781 28.0261 24.2304L29.8126 18.7322Z"
          fill="#FFC94C"
        />
      </svg>
    );
  };

  const svgMusic = () => {
    return (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#EBF1FE" />
        <g clipPath="url(#clip0_130_4408)">
          <path
            d="M41.2878 36.351C42.2823 34.6868 42.9421 32.582 43.0701 30.4994C43.1513 29.1627 42.8535 27.7594 42.2085 26.4399C41.1967 24.3671 39.4587 23.2027 37.7798 22.0777C36.5268 21.2383 35.3426 20.4456 34.5056 19.3132L34.3555 19.1113C33.8607 18.4466 33.3018 17.6933 33.2132 17.0606C33.1246 16.4206 32.5436 15.9652 31.9085 16.0021C31.2635 16.0464 30.7638 16.5806 30.7638 17.228V39.1623C29.7323 38.537 28.462 38.153 27.0711 38.153C23.6788 38.153 20.9167 40.3612 20.9167 43.0765C20.9167 45.7918 23.6788 48 27.0711 48C30.4634 48 33.2255 45.7918 33.2255 43.0765V28.7294C35.0743 29.4359 38.0998 31.2355 38.9319 35.4377C38.7768 35.6666 38.6291 35.9128 38.4568 36.1097C38.0063 36.6193 38.0555 37.3972 38.5675 37.8453C39.0747 38.2982 39.8526 38.2441 40.3031 37.7345C40.633 37.3603 40.9259 36.9221 41.2066 36.4642C41.2361 36.4298 41.2633 36.3928 41.2878 36.351Z"
            fill="#3B71F7"
          />
        </g>
        <defs>
          <clipPath id="clip0_130_4408">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(16 16)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };
  const musicCon = () => {
    return (
      <div className="flex flex-col gap-1 max-md:gap-5 max-md:flex-row max-md:w-full my-2">
        <div className="w-[244px] h-[211px] max-md:w-[150px] max-md:h-[110px] bg-[#f5f8ff] rounded-xl flex items-center justify-center mb-3">
          <svg
            width="84"
            height="120"
            viewBox="0 0 84 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:w-[70px] max-md:h-[80px]"
          >
            <path
              d="M76.8292 76.3162C80.5588 70.0756 83.0328 62.1826 83.5129 54.3727C83.8175 49.3599 82.7005 44.0979 80.2818 39.1498C76.4876 31.3768 69.9701 27.0103 63.6742 22.7914C58.9753 19.6434 54.5349 16.6709 51.3962 12.4243L50.833 11.6673C48.9775 9.17482 46.8819 6.34995 46.5496 3.97743C46.2172 1.57722 44.0386 -0.130623 41.6568 0.0078511C39.2382 0.17402 37.3642 2.17727 37.3642 4.60518V86.8587C33.4961 84.5138 28.7326 83.0737 23.5168 83.0737C10.7956 83.0737 0.43779 91.3544 0.43779 101.537C0.43779 111.719 10.7956 120 23.5168 120C36.2379 120 46.5957 111.719 46.5957 101.537V47.7352C53.5287 50.3846 64.8743 57.1329 67.9946 72.8913C67.413 73.7498 66.8591 74.673 66.2129 75.4115C64.5235 77.3224 64.7081 80.2396 66.6283 81.9198C68.53 83.6184 71.4472 83.4153 73.1366 81.5043C74.3736 80.1011 75.4722 78.4579 76.5246 76.7408C76.6353 76.6116 76.7372 76.4731 76.8292 76.3162Z"
              fill="#CEDBFD"
            />
          </svg>
        </div>
        <div className="w-full flex flex-col gap-2">
          {" "}
          <div className="font-semibold text-[black] text-xl">Song Title</div>
          <div className="text-[#666666] font-medium text-sm">
            Play Time — 2mins 45sec
          </div>
          <div className="text-[10px] text-[#666666]">No Rating</div>
        </div>
      </div>
    );
  };
  const nosongs = false;
  const image =
    "data:image/png;base64,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";
  if (user) {
    return (
      <div>
        <DashboardLayout>
          <div className="w-full">
            {" "}
            <div className="w-full flex justify-between items-center h-[58px] mb-6">
              <div className="flex flex-col justify-between h-full">
                <div className="text-[28px] font-semibold text-[black] px-3">
                  Profile
                </div>
                <div className="text-[#888888] font-medium text-sm px-3">
                  Your profile view
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="cursor-pointer text-sm font-semibold text-[#3B71F7]">
                Profile
              </div>
            </div>
            <section className="w-full flex items-center gap-8 max-md:gap-3 max-sm:gap-2 mt-8">
              <img
                src={image}
                className="w-[150px] h-[150px] rounded-[50%] max-md:w-[120px] max-md:h-[120px] max-sm:w-[100px] max-sm:h-[100px] object-cover"
                alt={user?.first_name + " " + user?.last_name}
              />
              <div className="h-[100px] max-md:h-[70px] flex flex-col justify-around">
                <div className="text-[black] font-semibold text-6xl max-md:text-3xl max-sm:text-2xl">
                  {user?.first_name + " " + user?.last_name}
                </div>
                <div className="text-[#888888] font-medium text-xl max-md:text-lg max-sm:text-base">
                  {user?.email}
                </div>
              </div>
            </section>
            <section className="my-10">
              <div className="flex flex-wrap gap-3 w-full justify-center">
                <div className="w-[32%] max-lg:w-[330px] max-md:w-full h-[140px] rounded-xl flex gap-2 bg-[#F5F8FF] px-4 py-8 xl:gap-4">
                  {svgMusic()}

                  <div>
                    {" "}
                    <div className="text-[#02123B] font-semibold text-[32px]">
                      {nosongs ? 0 : "33.3K"}
                    </div>
                    <div className="font-medium text-sm text-[#666666]">
                      Total Listens
                    </div>
                  </div>
                </div>
                <div className="w-[32%] max-lg:w-[330px] max-md:w-full h-[140px] rounded-xl flex gap-2 bg-[#FFFAF0] px-4 py-8 xl:gap-4">
                  {svgStar()}
                  <div>
                    <div className="text-[#02123B] font-semibold text-[32px]">
                      {nosongs ? 0 : "2.3K"}
                    </div>
                    <div className="font-medium text-sm text-[#666666]">
                      Your Ratings
                    </div>
                  </div>
                </div>
                <div className="w-[32%] max-lg:w-[330px] max-md:w-full h-[140px] rounded-xl flex gap-2 bg-[#F5FFFC] px-4 py-8 xl:gap-4">
                  {svgDollar()}
                  <div>
                    <div className="text-[#02123B] font-semibold text-[32px]">
                      0
                    </div>
                    <div className="font-medium text-sm text-[#666666]">
                      Admin Feedbacks
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              {nosongs ? (
                <div className="h-[500px] w-full bg-[#3B71F7] rounded-[20px] flex flex-col items-center gap-8 mt-10 pt-20 relative">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[280px] left-[222px] max-lg:hidden"
                  >
                    <g filter="url(#filter0_b_130_4586)">
                      <circle cx="60" cy="60" r="60" fill="#5482F8" />
                    </g>
                    <g clipPath="url(#clip0_130_4586)">
                      <path
                        d="M77.4815 64.0686C78.5784 60.8581 78.9419 57.0151 78.4033 53.4036C78.056 51.0858 77.0355 48.7923 75.4514 46.7683C72.9653 43.5883 69.5666 42.2275 66.2833 40.9126C63.833 39.9315 61.5177 39.0055 59.6729 37.3716L59.3424 37.0807C58.2536 36.123 57.023 35.0368 56.6411 33.9861C56.2565 32.9227 55.0963 32.3545 54.0225 32.6488C52.9346 32.9593 52.2735 34.0556 52.5091 35.1639L60.4898 72.71C58.4966 72.015 56.1825 71.8198 53.8016 72.3258C47.9948 73.5601 44.0702 78.345 45.0582 82.993C46.0462 87.6409 51.5776 90.4159 57.3844 89.1816C63.1912 87.9473 67.1158 83.1624 66.1279 78.5145L60.9077 53.9557C64.3295 54.4924 70.1632 56.472 73.1164 63.3624C72.9342 63.8107 72.771 64.2859 72.5477 64.6857C71.9619 65.7219 72.3292 67.0356 73.3687 67.6162C74.4016 68.207 75.7135 67.8313 76.2993 66.7951C76.7278 66.0346 77.0698 65.1779 77.3836 64.292C77.4216 64.2222 77.4547 64.1491 77.4815 64.0686Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_130_4586"
                        x="-240"
                        y="-240"
                        width="600"
                        height="600"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="120"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_130_4586"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_130_4586"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_130_4586">
                        <rect
                          width="56"
                          height="56"
                          fill="white"
                          transform="translate(26.7903 38.4336) rotate(-12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[57px] top-[390px] max-lg:hidden"
                  >
                    <g filter="url(#filter0_b_130_4591)">
                      <circle cx="36" cy="36" r="36" fill="#5482F8" />
                    </g>
                    <g clipPath="url(#clip0_130_4591)">
                      <path
                        d="M46.489 38.4412C47.1471 36.515 47.3652 34.2092 47.0421 32.0422C46.8337 30.6516 46.2214 29.2755 45.2709 28.0611C43.7793 26.1531 41.74 25.3366 39.7701 24.5476C38.2999 23.959 36.9107 23.4034 35.8039 22.4231L35.6056 22.2485C34.9523 21.6739 34.2139 21.0222 33.9847 20.3918C33.754 19.7537 33.0579 19.4128 32.4136 19.5894C31.7609 19.7757 31.3642 20.4335 31.5056 21.0984L36.294 43.6261C35.0981 43.2091 33.7096 43.092 32.2811 43.3956C28.797 44.1362 26.4422 47.0071 27.035 49.7959C27.6278 52.5847 30.9467 54.2496 34.4308 53.509C37.9148 52.7685 40.2696 49.8976 39.6768 47.1088L36.5447 32.3735C38.5978 32.6955 42.098 33.8833 43.8699 38.0175C43.7606 38.2865 43.6627 38.5716 43.5287 38.8115C43.1772 39.4332 43.3976 40.2214 44.0213 40.5698C44.6411 40.9243 45.4282 40.6989 45.7797 40.0772C46.0368 39.6208 46.242 39.1068 46.4303 38.5753C46.4531 38.5334 46.4729 38.4896 46.489 38.4412Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_130_4591"
                        x="-240"
                        y="-240"
                        width="552"
                        height="552"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="120"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_130_4591"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_130_4591"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_130_4591">
                        <rect
                          width="33.6"
                          height="33.6"
                          fill="white"
                          transform="translate(16.0742 23.0601) rotate(-12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="156"
                    height="156"
                    viewBox="0 0 156 156"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[280px] right-[200px] max-lg:hidden"
                  >
                    <g filter="url(#filter0_b_130_4595)">
                      <circle
                        cx="78"
                        cy="78.0001"
                        r="60"
                        transform="rotate(-21 78 78.0001)"
                        fill="#5482F8"
                      />
                    </g>
                    <g clipPath="url(#clip0_130_4595)">
                      <path
                        d="M95.7785 75.5336C95.652 72.1433 94.6142 68.4253 92.817 65.2466C91.6622 63.2073 89.8876 61.4318 87.6833 60.1099C84.2228 58.0321 80.5621 57.9796 77.0257 57.9287C74.3866 57.8909 71.8932 57.8561 69.5854 56.9919L69.1726 56.8387C67.8129 56.3348 66.2747 55.7618 65.5417 54.9177C64.8015 54.0628 63.5148 53.9481 62.6178 54.6077C61.7134 55.2875 61.4891 56.5478 62.1062 57.498L83.0122 89.6904C80.9023 89.7558 78.672 90.4029 76.6306 91.7285C71.6518 94.9618 69.7026 100.835 72.2906 104.821C74.8787 108.806 81.0372 109.414 86.016 106.181C90.9948 102.948 92.9439 97.074 90.3559 93.0888L76.6814 72.0319C80.0682 71.3067 86.2238 71.0642 91.4503 76.4386C91.4409 76.9225 91.4587 77.4246 91.3935 77.8779C91.218 79.0551 92.0317 80.1499 93.2103 80.3195C94.3863 80.5009 95.4764 79.68 95.6519 78.5027C95.7794 77.6391 95.7917 76.7168 95.7672 75.7773C95.7777 75.6985 95.7823 75.6184 95.7785 75.5336Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_130_4595"
                        x="-222.016"
                        y="-222.016"
                        width="600.032"
                        height="600.032"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="120"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_130_4595"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_130_4595"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_130_4595">
                        <rect
                          width="56"
                          height="56"
                          fill="white"
                          transform="translate(39.2673 69.7671) rotate(-33)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-10 right-10 max-lg:hidden"
                  >
                    <g filter="url(#filter0_b_130_4599)">
                      <circle cx="36" cy="36" r="36" fill="#5482F8" />
                    </g>
                    <g clipPath="url(#clip0_130_4599)">
                      <path
                        d="M46.4889 38.4412C47.1471 36.515 47.3652 34.2092 47.042 32.0422C46.8336 30.6516 46.2214 29.2755 45.2709 28.0611C43.7792 26.1531 41.74 25.3366 39.77 24.5476C38.2998 23.959 36.9107 23.4034 35.8038 22.4231L35.6055 22.2485C34.9522 21.6739 34.2138 21.0222 33.9847 20.3918C33.7539 19.7537 33.0578 19.4128 32.4135 19.5894C31.7608 19.7757 31.3642 20.4335 31.5055 21.0984L36.2939 43.6261C35.098 43.2091 33.7095 43.092 32.281 43.3956C28.7969 44.1362 26.4422 47.0071 27.035 49.7959C27.6277 52.5847 30.9466 54.2496 34.4307 53.509C37.9148 52.7685 40.2695 49.8976 39.6768 47.1088L36.5447 32.3735C38.5977 32.6955 42.0979 33.8833 43.8699 38.0175C43.7606 38.2865 43.6626 38.5716 43.5286 38.8115C43.1772 39.4332 43.3976 40.2214 44.0213 40.5698C44.641 40.9243 45.4281 40.6989 45.7796 40.0772C46.0367 39.6208 46.2419 39.1068 46.4302 38.5753C46.453 38.5334 46.4728 38.4896 46.4889 38.4412Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_130_4599"
                        x="-240"
                        y="-240"
                        width="552"
                        height="552"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="120"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_130_4599"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_130_4599"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_130_4599">
                        <rect
                          width="33.6"
                          height="33.6"
                          fill="white"
                          transform="translate(16.0742 23.0601) rotate(-12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="text-[white] font-semibold text-[40px] w-full text-center">
                    Upload your First Sound
                  </div>
                  <div className="text-base font-medium text-[rgb(255,255,255,0.6)] w-[500px] max-md:w-[70%] text-center">
                    A password reset link has been sent to the email address you
                    used in registering on the platform. do check your mail to
                    continue
                  </div>
                  <div
                    className="cursor-pointer rounded-[64px] bg-[#FFC94C] p-[17px] text-[#02123B] text-base font-semibold"
                    onClick={() => navigate("/dashboard/sound")}
                  >
                    Upload your Sound
                  </div>
                </div>
              ) : (
                <section>
                  <div className="flex gap-2 mb-6 mt-12 w-full">
                    <div>Your Top Songs</div> -
                    <div>Based off Reviews and Ratings</div>
                  </div>
                  <div className="w-full flex-wrap flex gap-2 justify-around max-md:gap-4 scrollbar-hide">
                    {musicCon()}
                    {musicCon()} {musicCon()} {musicCon()}
                    {musicCon()}
                  </div>{" "}
                </section>
              )}
            </section>
          </div>
        </DashboardLayout>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Profile;
