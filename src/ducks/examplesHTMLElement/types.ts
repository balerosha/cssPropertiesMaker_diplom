import { Dispatch } from "react";

export type ExamplesType = {
  id: string;
  name: string;
  [key: string]: string;
};
export type InitialExamplesState = {
  data: ExamplesType[];
  isLoading: boolean;
  isOpen: boolean;
  isChange: boolean;
};
export type ActionType =
  | GetExamplesDataSucceedType
  | GetExamplesDataRequestedType;

export type GetExamplesDataSucceedType = {
  type: string;
  payload: ExamplesType[];
};
export type GetExamplesDataRequestedType = {
  type: string;
  payload?: any;
};

export enum ExamplesActions {
  GET_EXAMPLES_DATA_REQUSTED = "GET_EXAMPLES_DATA_REQUSTED",
  GET_EXAMPLES_DATA_SUCCEED = "GET_EXAMPLES_DATA_SUCCEED",
  GET_EXAMPLE_CREATE_BLOCK = "GET_EXAMPLE_CREATE_BLOCK",
  GET_EXAMPLE_CHANGE_BTN = "GET_EXAMPLE_CHANGE_BTN",
  DELETE_EXAMPLE_DATA = "DELETE_EXAMPLE_DATA",
  ADD_EXAMPLE_DATA = "ADD_EXAMPLE_DATA",
  CHANGE_EXAMPLE_DATA = "CHANGE_EXAMPLE_DATA",
}

export type DispatchThunkActionType = (
  dispatch: Dispatch<ActionType>
) => Promise<void>;
