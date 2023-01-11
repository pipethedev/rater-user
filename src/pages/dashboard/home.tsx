import React from "react";
import { useNavigate } from "react-router";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const Home = () => {
  const navigate = useNavigate();
  const songsAvail = false;

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
          d="M32 47C40.2843 47 47 40.2843 47 32C47 23.7157 40.2843 17 32 17C23.7157 17 17 23.7157 17 32C17 40.2843 23.7157 47 32 47Z"
          fill="#00C288"
        />
        <path
          d="M26.75 36C26.75 37.933 28.317 39.5 30.25 39.5H33.5C35.5711 39.5 37.25 37.8211 37.25 35.75C37.25 33.6789 35.5711 32 33.5 32H30.5C28.4289 32 26.75 30.3211 26.75 28.25C26.75 26.1789 28.4289 24.5 30.5 24.5H33.75C35.683 24.5 37.25 26.067 37.25 28M32 22.25V24.5M32 39.5V41.75M47 32C47 40.2843 40.2843 47 32 47C23.7157 47 17 40.2843 17 32C17 23.7157 23.7157 17 32 17C40.2843 17 47 23.7157 47 32Z"
          stroke="#E0FFF6"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
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
        <g clip-path="url(#clip0_130_4408)">
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

  const transactions = [
    {
      date: "12 / 12 / 2022",
      description: "Sound Upload — I_don_manya.mp3",
      amount: "₦3,500.00",
      action: () => {
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#F5F8FF" />
            <path
              d="M18.5 15.5V17.5C18.5 17.7652 18.3946 18.0196 18.2071 18.2071C18.0196 18.3946 17.7652 18.5 17.5 18.5H10.5C10.2348 18.5 9.98043 18.3946 9.79289 18.2071C9.60536 18.0196 9.5 17.7652 9.5 17.5V15.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 13L14 15.5L16.5 13"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 15.5V9.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      },
    },
    {
      date: "12 / 12 / 2022",
      description: "Sound Upload — I_go_love_-_david_ft_seun.mp3",
      amount: "₦3,500.00",
      action: () => {
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#F5F8FF" />
            <path
              d="M18.5 15.5V17.5C18.5 17.7652 18.3946 18.0196 18.2071 18.2071C18.0196 18.3946 17.7652 18.5 17.5 18.5H10.5C10.2348 18.5 9.98043 18.3946 9.79289 18.2071C9.60536 18.0196 9.5 17.7652 9.5 17.5V15.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 13L14 15.5L16.5 13"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 15.5V9.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      },
    },
    {
      date: "12 / 12 / 2022",
      description: "Pro Plan , Monthly — March",
      amount: "₦3,500.00",
      action: () => {
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#F5F8FF" />
            <path
              d="M18.5 15.5V17.5C18.5 17.7652 18.3946 18.0196 18.2071 18.2071C18.0196 18.3946 17.7652 18.5 17.5 18.5H10.5C10.2348 18.5 9.98043 18.3946 9.79289 18.2071C9.60536 18.0196 9.5 17.7652 9.5 17.5V15.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 13L14 15.5L16.5 13"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 15.5V9.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      },
    },
    {
      date: "12 / 12 / 2022",
      description: "Pro Plan , Monthly — February",
      amount: "₦3,500.00",
      action: () => {
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#F5F8FF" />
            <path
              d="M18.5 15.5V17.5C18.5 17.7652 18.3946 18.0196 18.2071 18.2071C18.0196 18.3946 17.7652 18.5 17.5 18.5H10.5C10.2348 18.5 9.98043 18.3946 9.79289 18.2071C9.60536 18.0196 9.5 17.7652 9.5 17.5V15.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 13L14 15.5L16.5 13"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 15.5V9.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      },
    },
    {
      date: "12 / 12 / 2022",
      description: "Sound Upload — I_don_manya.mp3",
      amount: "₦3,500.00",
      action: () => {
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#F5F8FF" />
            <path
              d="M18.5 15.5V17.5C18.5 17.7652 18.3946 18.0196 18.2071 18.2071C18.0196 18.3946 17.7652 18.5 17.5 18.5H10.5C10.2348 18.5 9.98043 18.3946 9.79289 18.2071C9.60536 18.0196 9.5 17.7652 9.5 17.5V15.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 13L14 15.5L16.5 13"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 15.5V9.5"
              stroke="#7378DE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      },
    },
  ];

  return (
    <div>
      <DashboardLayout>
        {songsAvail ? (
          <div>
            <div className="text-[28px] font-semibold text-[black] px-3">
              Hi, Emmanuel
            </div>
            <div className="text-[#888888] mt-1 mb-8 font-medium text-sm px-3">
              Welcome to Music Rater. Here’s a nibble of stuff you need to
              know...
            </div>
            <div className="flex flex-wrap gap-3 w-full justify-center">
              <div className="w-[32%] max-lg:w-[330px] h-[270px] rounded-xl flex flex-col gap-2 bg-[#F5F8FF] px-4 py-8 xl:gap-4">
                {svgMusic()}

                <div className="text-[#02123B] font-semibold text-xl">
                  Upload your sound{" "}
                </div>
                <div className="font-medium text-sm text-[#666666]">
                  Upload your sound on our platform and share it with a global
                  audience.
                </div>
              </div>
              <div className="w-[32%] max-lg:w-[330px] h-[270px] rounded-xl flex flex-col gap-2 bg-[#FFFAF0] px-4 py-8 xl:gap-4">
                {svgStar()}

                <div className="text-[#02123B] font-semibold text-xl">
                  View ratings from experts
                </div>
                <div className="font-medium text-sm text-[#666666]">
                  View ratings and reviews on your sound from experts on the
                  platform.
                </div>
              </div>
              <div className="w-[32%] max-lg:w-[330px] h-[270px] rounded-xl flex flex-col gap-2 bg-[#F5FFFC] px-4 py-8 xl:gap-4">
                {svgDollar()}
                <div className="text-[#02123B] font-semibold text-xl">
                  View Overall Transactions
                </div>
                <div className="font-medium text-sm text-[#666666]">
                  View and manage all your transactions on our platform.
                </div>
              </div>
            </div>
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
                <g clip-path="url(#clip0_130_4586)">
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
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <g clip-path="url(#clip0_130_4591)">
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
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <g clip-path="url(#clip0_130_4595)">
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
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <g clip-path="url(#clip0_130_4599)">
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
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          </div>
        ) : (
          <div>
            <div className="text-[28px] font-semibold text-[black] px-3">
              Good Evening Emmanuel,
            </div>
            <div className="text-[#888888] mt-1 mb-8 font-medium text-sm px-3">
              Always remember you are a star, and you would always be!
            </div>
            <div className="w-full flex flex-wrap gap-1 max-lg:gap-3 justify-around">
              <div className="w-[31%] max-lg:w-full h-[140px] rounded-xl bg-[#F5F8FF] flex items-center gap-4 px-4">
                {svgMusic()}
                <div className="flex flex-col">
                  <div className="font-bold text-[32px] text-[black]">3000</div>
                  <div className="text-[#888888] font-medium text-base">
                    Songs Uploaded
                  </div>
                </div>
              </div>
              <div className="w-[31%] max-lg:w-full h-[140px] rounded-xl bg-[#FFFAF0] flex items-center gap-4 px-4">
                {svgStar()}
                <div className="flex flex-col">
                  <div className="font-bold text-[32px] text-[black]">4.5</div>
                  <div className="text-[#888888] font-medium text-base">
                    Your Rating
                  </div>
                </div>
              </div>
              <div className="w-[31%] max-lg:w-full h-[140px] rounded-xl bg-[#F5FFFC] flex items-center gap-4 px-4">
                {svgDollar()}
                <div className="flex flex-col">
                  <div className="font-bold text-[32px] flex text-[black]">
                    ₦125,000
                  </div>
                  <div className="text-[#888888] font-medium text-base">
                    Total payments made
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="text-lg font-medium pt-8 pb-4">
                Recently Uploaded Sounds
              </div>
              <div className="text-[#3B71F7] text-base font-semibold flex items-center">
                View more
                <svg
                  width="56"
                  height="12"
                  viewBox="0 0 56 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path
                    d="M56.495 6.49497C56.7683 6.22161 56.7683 5.77839 56.495 5.50503L52.0402 1.05025C51.7668 0.776886 51.3236 0.776886 51.0503 1.05025C50.7769 1.32362 50.7769 1.76684 51.0503 2.0402L55.0101 6L51.0503 9.9598C50.7769 10.2332 50.7769 10.6764 51.0503 10.9497C51.3236 11.2231 51.7668 11.2231 52.0402 10.9497L56.495 6.49497ZM0 6.7H28V5.3H0V6.7ZM28 6.7H56V5.3H28V6.7Z"
                    fill="#3B71F7"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex-wrap flex gap-2 justify-around max-md:gap-4 scrollbar-hide">
              {musicCon()}
              {musicCon()} {musicCon()} {musicCon()}
              {musicCon()}
            </div>{" "}
            <div className="flex justify-between w-full items-center mt-12">
              <div className="text-lg font-medium pt-8 pb-4">
                Recently Transaction
              </div>
              <div className="text-[#3B71F7] text-base font-semibold flex items-center">
                View more
                <svg
                  width="56"
                  height="12"
                  viewBox="0 0 56 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path
                    d="M56.495 6.49497C56.7683 6.22161 56.7683 5.77839 56.495 5.50503L52.0402 1.05025C51.7668 0.776886 51.3236 0.776886 51.0503 1.05025C50.7769 1.32362 50.7769 1.76684 51.0503 2.0402L55.0101 6L51.0503 9.9598C50.7769 10.2332 50.7769 10.6764 51.0503 10.9497C51.3236 11.2231 51.7668 11.2231 52.0402 10.9497L56.495 6.49497ZM0 6.7H28V5.3H0V6.7ZM28 6.7H56V5.3H28V6.7Z"
                    fill="#3B71F7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full h-[64px] bg-[#F5F8FF] items-center gap-1">
              <div className="w-[15%] max-md:[20%] text-[#0F1141] font-semibold text-sm pl-2">
                DATE
              </div>
              <div className="w-[40%] max-md:w-[45%] text-[#0F1141] font-semibold text-sm pl-2">
                DESCRIPTION
              </div>
              <div className="w-[30%] max-md:[20%] text-[#0F1141] font-semibold text-sm pl-2">
                AMOUNT
              </div>
              <div className="w-[15%] text-[#0F1141] font-semibold text-sm pl-2  flex px-4 justify-end">
                ACTION
              </div>
            </div>
            <div className="flex flex-col w-full">
              {transactions.map((transaction) => {
                return (
                  <div className="flex h-[64px] w-full items-center border-b-[1px] border-[#E3E4F8] gap-1">
                    <div className="w-[15%] max-md:[20%] text-[#666666] text-sm max-md:text-xs">
                      {transaction.date}
                    </div>
                    <div className="w-[40%] max-md:w-[45%] text-[#666666] text-sm max-md:text-xs">
                      {transaction.description}
                    </div>
                    <div className="w-[30%] max-md:[20%] text-[#666666] text-sm max-md:text-xs">
                      {transaction.amount}
                    </div>
                    <div className="w-[15%] text-[#666666] text-sm flex px-4 justify-end ">
                      {transaction.action()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </DashboardLayout>
    </div>
  );
};

export default Home;
