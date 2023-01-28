import { useState } from "react";
import { useFormik } from "formik";

const useAtm = () => {
  const initialData = [{ name: "Mike", saldo: 50 }];
  const [clientData, setClientData] = useState(initialData[0]);
  const [atmMode, setAtmMode] = useState("");
  const formik = useFormik({
    initialValues: {
      amount: 0,
    },
    onSubmit: (values, { resetForm }) => {
      switch (atmMode) {
        case "Cash Back":
          setClientData({
            ...clientData,
            saldo: clientData.saldo - values.amount,
          });
          break;
        case "Deposit":
          setClientData({
            ...clientData,
            saldo: clientData.saldo + values.amount,
          });
          break;
      }
      //alert(`Transaction Successfull`);
      resetForm({ values: { amount: 0 } });
    },
    validate: (values) => {
      let errors = {};
      if (!values.amount) {
        errors.amount = "Enter valid amount";
      } else if (atmMode === "Cash Back" && values.amount > clientData.saldo) {
        errors.amount =
          "Withdrawal amount is bigger than the avaiable balance!";
      }
      return errors;
    },
  });

  const handleModeSelect = (e) => {
    const selectedmode = e.target.value;
    setAtmMode(selectedmode);
  };

  return {
    clientData,
    setClientData,
    atmMode,
    setAtmMode,
    handleModeSelect,
    formik,
  };
};

export default useAtm;
