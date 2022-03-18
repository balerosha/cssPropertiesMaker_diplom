import {
  deleteExample,
  ACTION_GET_EXAMPLE_CREATE_BLOCK,
  ACTION_GET_EXAMPLE_CHANGE_BTN,
} from "../../../../ducks/examplesHTMLElement/actions";
import { useOrderExamplesHooks } from "./hooks/useOrderExamplesHooks";
import { LoadingBlock } from "./components/LoadingBlock";
import "./style.css";

export const OrderExamples = () => {
  let exampleCounter = 0;
  const { locationState, preloaderExamples, dataExamples, setRules, dispatch } =
    useOrderExamplesHooks();
  return (
    <div className="order_example">
      <div className="order_with_examples">
        {dataExamples.map((item) => {
          exampleCounter++;
          return (
            <div key={item.id} className="example_of_order">
              <span
                onClick={() => {
                  setRules({ ...item });
                  dispatch(ACTION_GET_EXAMPLE_CREATE_BLOCK(true));
                  dispatch(ACTION_GET_EXAMPLE_CHANGE_BTN(true));
                }}
              >
                {`Example ${exampleCounter}`}
              </span>
              <button
                onClick={() => {
                  dispatch(deleteExample(locationState.url, item.id));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      <div className="loading_block">
        {preloaderExamples && <LoadingBlock />}
      </div>
    </div>
  );
};
