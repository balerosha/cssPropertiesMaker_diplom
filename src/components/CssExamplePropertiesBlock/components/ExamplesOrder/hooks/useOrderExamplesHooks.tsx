import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useContext } from "react";
import {
  ACTION_GET_EXAMPLE_CREATE_BLOCK,
  ACTION_GET_EXAMPLE_CHANGE_BTN,
  getExamples,
} from "../../../../../ducks/examplesHTMLElement/actions";
import {
  getLoadingExamplesSelector,
  getDataExamplesSelector,
} from "../../../../../ducks/examplesHTMLElement/selectors";
import { ExampleContext } from "../../../context/ExampleContext";
import { LocationType } from "../types";

export const useOrderExamplesHooks = () => {
  const { state: locationState } = useLocation<LocationType>();
  const preloaderExamples = useSelector(getLoadingExamplesSelector);
  const dataExamples = useSelector(getDataExamplesSelector);
  const { setRules } = useContext(ExampleContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExamples(locationState.url));
    dispatch(ACTION_GET_EXAMPLE_CREATE_BLOCK(false));
    dispatch(ACTION_GET_EXAMPLE_CHANGE_BTN(false));
  }, [locationState.url]);
  return {
    locationState,
    preloaderExamples,
    dataExamples,
    setRules,
    dispatch,
  };
};
