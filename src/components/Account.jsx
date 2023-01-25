import { useState } from "react";
import ATMMode from "./ATMMode";

const Account = (props) => {
  return (
    <div>
      <h1>Welcome to Snow Bank</h1>
      <h4>Select an operation type from our ATM</h4>
      <ATMMode {...props} />
      <h2>{`Current balance: ${props.clientData.saldo}$`}</h2>
    </div>
  );
};

export default Account;
