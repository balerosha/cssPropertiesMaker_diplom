import { OrderExamples } from "./components/ExamplesOrder";
import { ExampleBlock } from "./components/ExampleBlock";
import { ExampleContextProvider } from "./context/ExampleContextProvider";

export const CssExamplePropertiesBlock = () => {
  return (
    <ExampleContextProvider>
      <div className="example">
        <OrderExamples />
        <ExampleBlock />
      </div>
    </ExampleContextProvider>
  );
};
