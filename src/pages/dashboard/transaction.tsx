import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { RaterContext } from "../../App";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { BsDownload } from "react-icons/bs";

const Transaction = () => {
  const navigate = useNavigate();
  const [transactions, settransactions] = useState<any>();
  const { baseUrl, token } = useContext(RaterContext);

  const mytoken = localStorage.getItem("token");

  useEffect(() => {
    if (mytoken == null) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    Axios.get(`${baseUrl}api/v1/transactions/my-transactions`, {
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        console.log(res);
        settransactions(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  //search
  const [search, setsearch] = useState<string>("");
  const filteredtransaction = transactions?.filter((tran) =>
    tran?.pricing_id.toLowerCase().includes(search?.toLowerCase())
  );

  if (transactions) {
    return (
      <DashboardLayout>
        <div className="flex w-full items-center justify-between mb-4 max-sm:flex-col">
          <div className="flex flex-col justify-between h-full max-sm:w-full">
            {" "}
            <div className="text-[28px] font-semibold text-[black] px-3">
              Transactions
            </div>
            <div className="text-[#888888] font-medium text-sm px-3">
              All Transactions you’ve made on the platform
            </div>
          </div>
          <div className="flex w-full justify-start max-sm:mt-2">
            {" "}
            <div className="bg-[#3B71F7]  max-sm:px-5 text-center max-md:text-sm max-sm:py-2 px-8 py-3 text-[white] font-semibold cursor-pointer rounded-[58px]">
              Show References
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
          <div className="text-[#3B71F7] font-semibold text-sm">
            Transaction
          </div>
        </div>
        {transactions.length == 0 ? (
          <section className="w-full rounded-[20px] h-[500px] bg-[#fafbff] flex items-center flex-col gap-4 mt-10">
            <div className="mt-[120px] text-[#02123B] font-semibold text-[26px]">
              No Transactions Yet
            </div>
            <div className="font-medium text-base text-[#666666] text-center">
              It looks like you haven't made any transactions yet on this
              platform
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
                value={search}
                onChange={(e) => setsearch(e.target.value)}
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
                <div className="w-[17%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                  DATE
                </div>
                <div className="w-[20%] max-md:w-[30%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                  STATUS
                </div>
                <div className="w-[12%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                  AMOUNT
                </div>
                <div className="w-[42%] max-md:w-[30%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                  REFERENCE
                </div>
                <div className="w-[10%] max-md:w[12%] text-[#0F1141] font-semibold text-sm pl-2 max-md:text-[11px] max-sm:font-medium">
                  ACTION
                </div>
              </div>

              <div className="flex flex-col w-full max-md:gap-1">
                {filteredtransaction?.map((transaction) => {
                  const myDate = new Date(transaction.created_at);
                  return (
                    <div className="flex h-[64px] w-full items-center border-b-[1px] border-[#E3E4F8] gap-1">
                      <div className="w-[17%] pl-2 text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                        {`${myDate.getDate()}-${myDate.getMonth()}-${myDate.getFullYear()}`}
                      </div>
                      <div className="w-[20%] pl-2 max-md:w-[30%] text-[#24dd87] font-semibold text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                        {transaction.payment_status}
                      </div>
                      <div className="w-[12%] pl-2 text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                        {transaction.amount}
                      </div>{" "}
                      <div className="w-[42%] pl-2 max-md:w-[30%] text-[#666666] text-sm max-md:text-[10px] max-md:font-bold flex flex-wrap">
                        {transaction.pricing_id}
                      </div>
                      <div className="w-[10%] pl-2 text-lg flex px-4 justify-end flex-wrap text-[#3B71F7]">
                        <BsDownload />
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

export default Transaction;
