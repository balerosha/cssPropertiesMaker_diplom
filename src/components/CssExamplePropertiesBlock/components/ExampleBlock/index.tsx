import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOpenCreateExampleSelector } from "../../../../ducks/examplesHTMLElement/selectors";
import { ExampleRules } from "./components/ExampleRules";
import { ExampleView } from "./components/ExampleView";
import { ACTION_GET_EXAMPLE_CREATE_BLOCK } from "../../../../ducks/examplesHTMLElement/actions";
import { ExampleContext } from "../../context/ExampleContext";
import { RefreshBlock } from "./components/RefreshBlock";
import { CopyBlock } from "./components/CopyBlock";

export const ExampleBlock = () => {
  const { setRules } = useContext(ExampleContext);
  const dispatch = useDispatch();
  const isOpenSelector = useSelector(getOpenCreateExampleSelector);
  return (
    <div className="example_block">
      {isOpenSelector ? (
        <>
          <ExampleView />
          <ExampleRules />
          <div className="refresh_copy_block">
            <RefreshBlock />
            <CopyBlock />
          </div>
        </>
      ) : (
        <button
          className="create_example_btn"
          onClick={() => {
            dispatch(ACTION_GET_EXAMPLE_CREATE_BLOCK(true));
            setRules({ id: "1", name: "secondary" });
          }}
        >
          Create Example
        </button>
      )}
    </div>
  );
};
