import {
  ExamplesActions,
  InitialExamplesState,
  ActionType,
  ExamplesType,
} from "./types";
export const initialExamplesState: InitialExamplesState = {
  data: [],
  isLoading: true,
  isOpen: false,
  isChange: false,
};
export const examplesReducer = (
  state = initialExamplesState,
  action: ActionType
): InitialExamplesState => {
  switch (action.type) {
    case ExamplesActions.GET_EXAMPLES_DATA_SUCCEED: {
      return { ...state, data: action.payload, isLoading: false };
    }
    case ExamplesActions.GET_EXAMPLES_DATA_REQUSTED: {
      return { ...state, isLoading: true };
    }
    case ExamplesActions.GET_EXAMPLE_CREATE_BLOCK: {
      return { ...state, isOpen: action.payload };
    }
    case ExamplesActions.GET_EXAMPLE_CHANGE_BTN: {
      return { ...state, isChange: action.payload };
    }

    case ExamplesActions.DELETE_EXAMPLE_DATA: {
      return {
        ...state,
        data: state.data.filter((item) => {
          return action.payload === item.id ? false : true;
        }),
        isLoading: false,
      };
    }
    case ExamplesActions.ADD_EXAMPLE_DATA: {
      return {
        ...state,
        data: addExample(state.data, action.payload),
        isLoading: false,
      };
    }
    case ExamplesActions.CHANGE_EXAMPLE_DATA: {
      return {
        ...state,
        data: changeExample(state.data, action.payload),
        isLoading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
function addExample(arr: ExamplesType[], pushItem: ExamplesType) {
  arr.push(pushItem);
  return [...arr];
}
function changeExample(arr: ExamplesType[], example: ExamplesType) {
  return arr.map((item) => {
    return item.id === example.id ? example : item;
  });
}
