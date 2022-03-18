import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  ExampleContext,
  ExampleContextType,
  InitialContextArg,
} from "../../../../context/ExampleContext";

const Button = styled.button((props) => ({
  ...props.theme,
}));
const Input = styled.input((props) => ({
  ...props.theme,
}));
const Block = styled.div((props) => ({
  ...props.theme,
}));
export const ExampleView = () => {
  const { state: locationState } =
    useLocation<{ button: boolean; input: boolean; div: boolean }>();
  const { rules } = useContext<ExampleContextType | InitialContextArg>(
    ExampleContext
  );
  const { id, name, ...restRules } = rules;
  return (
    <div className="example_view">
      {locationState.button && <Button theme={restRules}>Example</Button>}
      {locationState.input && <Input placeholder="Example" theme={restRules} />}
      {locationState.div && <Block theme={restRules}>Example</Block>}
    </div>
  );
};
