import { Dispatch } from "react";
import {
  ExamplesActions,
  ExamplesType,
  ActionType,
  DispatchThunkActionType,
} from "./types";
import { RulesType } from "../../components/CssExamplePropertiesBlock/context/ExampleContext";
//actions
export const ACTION_GET_EXAMPLES_DATA_REQUESTED = (): ActionType => ({
  type: ExamplesActions.GET_EXAMPLES_DATA_REQUSTED,
});
export const ACTION_GET_EXAMPLE_CREATE_BLOCK = (
  payload: boolean
): ActionType => ({
  type: ExamplesActions.GET_EXAMPLE_CREATE_BLOCK,
  payload,
});
export const ACTION_GET_EXAMPLE_CHANGE_BTN = (
  payload: boolean
): ActionType => ({
  type: ExamplesActions.GET_EXAMPLE_CHANGE_BTN,
  payload,
});
export const ACTION_GET_EXAMPLES_DATA_SUCCEED = (
  data: ExamplesType[]
): ActionType => ({
  type: ExamplesActions.GET_EXAMPLES_DATA_SUCCEED,
  payload: data,
});
//
export const ACTION_DELETE_EXAMPLES_DATA = (id: string): ActionType => ({
  type: ExamplesActions.DELETE_EXAMPLE_DATA,
  payload: id,
});

export const ACTION_ADD_EXAMPLE_DATA = (example: ExamplesType): ActionType => ({
  type: ExamplesActions.ADD_EXAMPLE_DATA,
  payload: example,
});
export const ACTION_PATCH_EXAMPLE_DATA = (
  example: ExamplesType
): ActionType => ({
  type: ExamplesActions.CHANGE_EXAMPLE_DATA,
  payload: example,
});
//get
export const getExamples =
  (url: string) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());

    const response = await fetch(url);
    const data = await response.json();
    dispatch(ACTION_GET_EXAMPLES_DATA_SUCCEED(data));
  };
//patch
export const patchExample =
  (url: string, example: RulesType) =>
  async (dispatch: Dispatch<DispatchThunkActionType | ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());
    dispatch(ACTION_GET_EXAMPLE_CREATE_BLOCK(false));
    const resposne = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(example),
    });
    const data = await resposne.json();
    console.log(data);
    dispatch(ACTION_PATCH_EXAMPLE_DATA(example));
  };
//post
export const postExample =
  (url: string, example: RulesType) =>
  async (dispatch: Dispatch<DispatchThunkActionType | ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());
    dispatch(ACTION_GET_EXAMPLE_CREATE_BLOCK(false));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(example),
    });
    const data = await response.json();

    dispatch(ACTION_ADD_EXAMPLE_DATA(data));
  };
//delete
export const deleteExample =
  (url: string, id: string) =>
  async (dispatch: Dispatch<DispatchThunkActionType | ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    dispatch(ACTION_DELETE_EXAMPLES_DATA(id));
  };
