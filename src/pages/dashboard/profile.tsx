import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { useNavigate } from "react-router";
import { RaterContext } from "../../App";
import Axios from "axios";

const Profile = () => {
  const { baseUrl, token, user } = useContext(RaterContext);
  const [loading, setloading] = useState(false);

  const [myMusic, setmyMusic] = useState<any>();

  const mytoken = localStorage.getItem("token");

  // console.log(user);
  const musicSvg = () => {
    return (
      <svg
        width="244"
        height="211"
        viewBox="0 0 244 211"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-md:w-[75px] max-md:h-[75px]"
      >
        <rect width="244" height="211" rx="12" fill="#F5F8FF" />
        <g clip-path="url(#clip0_130_5032)">
          <path
            d="M156.829 112.316C160.559 106.076 163.033 98.1826 163.513 90.3727C163.818 85.3599 162.7 80.0979 160.282 75.1498C156.488 67.3768 149.97 63.0103 143.674 58.7914C138.975 55.6434 134.535 52.6709 131.396 48.4243L130.833 47.6673C128.977 45.1748 126.882 42.35 126.55 39.9774C126.217 37.5772 124.039 35.8694 121.657 36.0079C119.238 36.174 117.364 38.1773 117.364 40.6052V122.859C113.496 120.514 108.733 119.074 103.517 119.074C90.7956 119.074 80.4378 127.354 80.4378 137.537C80.4378 147.719 90.7956 156 103.517 156C116.238 156 126.596 147.719 126.596 137.537V83.7352C133.529 86.3846 144.874 93.1329 147.995 108.891C147.413 109.75 146.859 110.673 146.213 111.411C144.523 113.322 144.708 116.24 146.628 117.92C148.53 119.618 151.447 119.415 153.137 117.504C154.374 116.101 155.472 114.458 156.525 112.741C156.635 112.612 156.737 112.473 156.829 112.316V112.316Z"
            fill="#CEDBFD"
          />
        </g>
        <defs>
          <clipPath id="clip0_130_5032">
            <rect
              width="120"
              height="120"
              fill="white"
              transform="translate(62 36)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };
  const [stats, setstats] = useState<any>();

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

  useEffect(() => {
    if (mytoken == null) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }

    Axios.get(`${baseUrl}api/v1/song/all`, {
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        setmyMusic(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (mytoken == null) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    Axios.get(`${baseUrl}api/v1/dashboard/stats`, {
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        setstats(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

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
  const image =
    "data:image/png;base64,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";
  if (user && myMusic) {
    console.log(user);
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
                <div className="w-[100%] max-lg:w-[330px] max-md:w-full h-[140px] rounded-xl flex gap-2 bg-[#F5FFFC] px-4 py-8 xl:gap-4">
                  {svgDollar()}
                  <div>
                    <div className="text-[#02123B] font-semibold text-[32px]">
                      0
                    </div>
                    <div className="font-medium text-sm text-[#666666]">
                      Feedbacks
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <section>
                <div className="flex gap-2 mb-6 mt-12 w-full">
                  <div>Your Top Songs</div> -<div>Based off Reviews</div>
                </div>
                <div className="w-full flex-wrap flex gap-2 max-md:gap-4 scrollbar-hide">
                  {myMusic.length > 0 &&
                    myMusic?.map((music) => {
                      console.log(music);
                      return (
                        <div
                          className="w-[244px] max-md:w-full gap-4 max-md:gap-6 max-md:items-start my-4 flex flex-col max-md:flex-row max-md:border-b-[1px] max-md:border-[#ebe7e7] pb-2"
                          onClick={() => {
                            navigate(`/dashboard/${music.id}`);
                          }}
                        >
                          {musicSvg()}
                          <div className="flex flex-col gap-2">
                            <div className="font-semibold text-[20px] text-[black] max-md:text-base">
                              {music.title}
                            </div>
                            {/* <div className="font-medium text-[#666666] text-sm max-sm:text-[12px]">
                              {music.playTime}
                            </div> */}
                            {music.ratings.length > 0 ? (
                              music?.ratings[0].rating == "Good" ? (
                                <div className="text-[#00C288] font-semibold text-base max-md:text-sm bg-[#EBFFF9] rounded-[64px] p-1 w-[75px] flex items-center justify-center">
                                  {music?.ratings[0].rating}
                                </div>
                              ) : music.ratings[0].rating == "Fair" ? (
                                <div className="text-[#3a00c2] font-semibold text-base max-md:text-sm bg-[#d1c2f5] rounded-[64px] p-1 w-[75px] flex items-center justify-center">
                                  {music?.ratings[0].rating}
                                </div>
                              ) : music.ratings[0].rating == "Bad" ? (
                                <div className="text-[#e94444] font-semibold text-base max-md:text-sm bg-[#ffc107] rounded-[64px] p-1 w-[75px] flex items-center justify-center">
                                  {music?.ratings[0].rating}
                                </div>
                              ) : null
                            ) : (
                              <div className="font-bold text-sm text-[#3a00c2]">
                                No ratings yet
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  {myMusic.length == 0 && (
                    <div className="w-full text-center font-bold text-xl">
                      NO MUSICS FOUND
                    </div>
                  )}
                </div>{" "}
              </section>
            </section>
          </div>
        </DashboardLayout>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
          {" "}
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
        <br />
      </div>
    );
  }
};

export default Profile;
