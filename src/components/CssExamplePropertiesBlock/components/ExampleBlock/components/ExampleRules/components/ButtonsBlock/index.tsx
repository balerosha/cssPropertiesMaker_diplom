import { useButtonsBlockHook } from "./hooks/useButtonsBlockHook";
import {
  ACTION_GET_EXAMPLE_CHANGE_BTN,
  patchExample,
  postExample,
} from "../../../../../../../../ducks/examplesHTMLElement/actions";

type Props = {
  onClick: () => void;
};

export const ButtonsBlock = ({ onClick }: Props) => {
  const { state, dispatch, isChangeExample, rules, setRules } =
    useButtonsBlockHook();

  const isDisabled = Object.entries(rules).length < 3 ? true : false;

  return (
    <div className="btns_block">
      <button onClick={onClick}>Add rule</button>
      {isChangeExample ? (
        <button
          disabled={isDisabled}
          className="submit_btn"
          onClick={() => {
            dispatch(patchExample(state.url, rules));
            setRules({ id: "1", name: "secondary" });
            dispatch(ACTION_GET_EXAMPLE_CHANGE_BTN(false));
          }}
        >
          Change Example
        </button>
      ) : (
        <button
          disabled={isDisabled}
          className="submit_btn"
          onClick={() => {
            dispatch(postExample(state.url, rules));
            setRules({ id: "1", name: "secondary" });
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};
