import React from "react";
import { useNavigate } from "react-router";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const Feedback = () => {
  const navigate = useNavigate();
  const feedbacks = [
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
    {
      userImage:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Administrator",
      time: "Today - 9:12pm to Song Title",
      rating: "Good",
      text: "This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.",
    },
  ];
  return (
    <DashboardLayout>
      <div className="w-full">
        {" "}
        <div className="w-full flex justify-between items-center h-[58px] mb-6">
          <div className="flex flex-col justify-between h-full">
            <div className="text-[28px] font-semibold text-[black] px-3">
              Feedbacks
            </div>
            <div className="text-[#888888] font-medium text-sm px-3">
              feedback from admin on your songs
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
          <div className="cursor-pointer text-sm font-semibold text-[#3B71F7]">
            Feedbacks
          </div>
        </div>
        <div className="mt-5">
          {feedbacks.length == 0 ? (
            <section className="w-full rounded-[20px] h-[500px] bg-[#fafbff] flex items-center flex-col gap-4">
              <div className="mt-[120px] text-[#02123B] font-semibold text-[26px]">
                No feedbacks Yet
              </div>
              <div className="font-medium text-base text-[#666666] text-center">
                It looks like you don't have any feedbacks on any of your songs
                yet. <br />
                To add a song go to the soundpage to add a song
              </div>
            </section>
          ) : (
            <section className="w-full flex justify-between flex-wrap gap-8 mt-10">
              {feedbacks.map((feedback) => {
                return (
                  <div className="w-[48%] max-md:w-full p-4 rounded-[16px] bg-[white] shadow-sm space-y-4">
                    <div className="flex gap-4 items-center">
                      <img
                        src={feedback.userImage}
                        alt={feedback.name}
                        className="rounded-[50%] w-[56px] h-[56px] object-cover"
                      />
                      <div className="h-[36px] flex flex-col justify-between">
                        <div className="text-[#02123b] text-base font-semibold">
                          {feedback.name}
                        </div>
                        <div className="text-[#666666] text-xs font-medium">
                          {feedback.time}
                        </div>
                      </div>
                    </div>
                    {feedback.rating == "Good" ? (
                      <div className="text-base font-semibold text-[#00C288] w-[75px] bg-[#EBFFF9] h-[32px] flex justify-center items-center rounded-[64px]">
                        {feedback.rating}
                      </div>
                    ) : null}
                    <div className="w-full pr-4 font-medium text-base text-[#666666]">
                      {feedback.text}
                    </div>
                  </div>
                );
              })}
            </section>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Feedback;
