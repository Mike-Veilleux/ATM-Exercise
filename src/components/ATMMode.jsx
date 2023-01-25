import TransactionForm from "./TransactionForm";

const ATMMode = (props) => {
  return (
    <>
      <div>
        <select
          className="dropdownList"
          onChange={(e) => props.handleModeSelect(e)}
          name="mode"
          id="mode-select"
        >
          <option id="no-selection" value="">
            --- Transaction type ---
          </option>
          <option id="deposit-selection" value="Deposit">
            Deposit
          </option>
          <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option>
        </select>
        {props.atmMode !== "" && <TransactionForm {...props} />}
      </div>
    </>
  );
};

export default ATMMode;
