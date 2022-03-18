import React, { useContext, useRef, useState } from "react";
import { ExampleContext } from "../../../../../../../context/ExampleContext";

export const useAddRuleBlockHook = () => {
  const [values, setValues] = useState({ property: "", propertyValue: "" });
  const { setRules } = useContext(ExampleContext);
  return { values, setValues, setRules };
};
