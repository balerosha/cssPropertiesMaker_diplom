import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";

export const useSignUpHooks = () => {
  const currentUserAuth = useContext(AuthContext);
  const [values, setValues] = useState({ password: "", email: "" });
  const history = useHistory();
  return {
    currentUserAuth,
    values,
    setValues,
    history,
  };
};
