import React from "react";
import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 2500000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_1e869f96d5b66facc9aae0f6f0334b3a99ce8995",
};

function PayStack() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="PayStack">
      <PaystackButton
        {...componentProps}
        className="bg-[red] text-white px-10 py-4 text-center"
      />
    </div>
  );
}

export default PayStack;
