import { useLocation } from "react-router-dom";
import { getIsChangeBtnSelector } from "../../../../../../../../../ducks/examplesHTMLElement/selectors";
import { useContext } from "react";
import { ExampleContext } from "../../../../../../../context/ExampleContext";
import { useDispatch, useSelector } from "react-redux";

export const useButtonsBlockHook = () => {
  const { state } = useLocation<{ url: string }>();
  const dispatch = useDispatch();
  const isChangeExample = useSelector(getIsChangeBtnSelector);
  const { rules, setRules } = useContext(ExampleContext);

  return { state, dispatch, isChangeExample, rules, setRules };
};
