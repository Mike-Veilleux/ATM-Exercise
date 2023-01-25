const TransactionForm = (props) => {
  return (
    <div>
      <form className="colFlex" onSubmit={props.formik.handleSubmit}>
        <input
          id="amountField"
          name="amount"
          className="textInput"
          type="number"
          onChange={props.formik.handleChange}
          placeholder={"Enter amount..."}
          value={props.formik.values.amount}
        />
        {props.formik.errors.amount ? (
          <h3 id="amountError" style={{ color: "#c583ae" }}>
            {props.formik.errors.amount}
          </h3>
        ) : null}
        {!props.formik.errors.amount ? (
          <input className="btn" type="submit" value="Submit"></input>
        ) : null}
      </form>
    </div>
  );
};

export default TransactionForm;
