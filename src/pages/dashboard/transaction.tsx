import React from "react";
import { useNavigate } from "react-router";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const Transaction = () => {
  const navigate = useNavigate();
  const transactions = [
    {
      date: "12 / 12 / 2022",
      description: "Sound Upload — I_don_manya.mp3",
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
      amount: "₦3,500",
      reference: "rfid_123456_rntyuvis",
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
    <DashboardLayout>
      <div className="text-[28px] font-semibold text-[black] px-3">
        Transactions
      </div>
      <div className="text-[#888888] mt-1 mb-8 font-medium text-sm px-3">
        All Transactions you’ve made on the platform
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
        <div className="text-[#3B71F7] font-semibold text-sm">Transaction</div>
      </div>
      {transactions.length == 0 ? (
        <section className="w-full rounded-[20px] h-[500px] bg-[#fafbff] flex items-center flex-col gap-4 mt-10">
          <div className="mt-[120px] text-[#02123B] font-semibold text-[26px]">
            No Transactions Yet
          </div>
          <div className="font-medium text-base text-[#666666] text-center">
            It looks like you haven't made any transactions yet on this platform
          </div>
        </section>
      ) : (
        <div>
          <div className="text-[20px] text-[black] font-semibold my-4">
            All Transactions - {transactions.length}
          </div>
          <div className="flex items-center w-full justify-between">
            <input
              type="text"
              placeholder=" Search through your transactions"
              className="outline-none border-[0.5px] bg-[#ffffff] border-[#cccccc] p-4 rounded-[64px] w-[400px] max-md:w-[300px] max-sm:w-[150px] h-[50px] text-[#b3b3b3] font-semibold text-sm"
            />
            <section className="flex gap-4 items-center">
              {" "}
              <div className=" flex gap-4 cursor-pointer py-3 px-4 rounded-[72px] text-[#3B71F7] text-sm font-semibold bg-[#F5F8FF] max-sm:px-2 max-sm:py-1 max-sm:text-[10px] max-sm:gap-2 max-sm:rounded-3xl">
                <div>Date: All</div>
              </div>
            </section>
          </div>
          <section className="w-full">
            <div className="w-full flex h-[64px] bg-[#F5F8FF] items-center mt-10 max-md:gap-1">
              <div className="w-[14%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                DATE
              </div>
              <div className="w-[32%] max-md:w-[30%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                DESCRIPTION
              </div>
              <div className="w-[12%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                AMOUNT
              </div>
              <div className="w-[32%] max-md:w-[30%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                REFERENCE
              </div>
              <div className="w-[10%] max-md:w[12%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                ACTION
              </div>
            </div>

            <div className="flex flex-col w-full max-md:gap-1">
              {transactions.map((transaction) => {
                return (
                  <div className="flex h-[64px] w-full items-center border-b-[1px] border-[#E3E4F8] gap-1">
                    <div className="w-[14%]  text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                      {transaction.date}
                    </div>
                    <div className="w-[32%] max-md:w-[30%] text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                      {transaction.description}
                    </div>
                    <div className="w-[12%] text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                      {transaction.amount}
                    </div>{" "}
                    <div className="w-[32%] max-md:w-[30%] text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                      {transaction.reference}
                    </div>
                    <div className="w-[10%] text-[#666666] text-lg flex px-4 justify-end flex-wrap">
                      {transaction.action()}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Transaction;
