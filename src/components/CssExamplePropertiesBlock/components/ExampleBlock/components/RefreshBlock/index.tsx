import { useContext } from "react";
import { ExampleContext } from "../../../../context/ExampleContext";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { ACTION_GET_EXAMPLE_CHANGE_BTN } from "../../../../../../ducks/examplesHTMLElement/actions";
export const RefreshBlock = () => {
  const { setRules } = useContext(ExampleContext);
  const dispatch = useDispatch();
  return (
    <div
      className="refresh_btn"
      onClick={() => {
        setRules({ id: nanoid(), name: "secondary" });
        dispatch(ACTION_GET_EXAMPLE_CHANGE_BTN(false));
      }}
    >
      REFRESH
    </div>
  );
};
