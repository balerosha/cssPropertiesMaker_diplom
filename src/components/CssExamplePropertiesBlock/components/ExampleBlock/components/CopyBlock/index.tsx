import { useContext } from "react";
import { ExampleContext } from "../../../../context/ExampleContext";
import useCopy from "@react-hook/copy";
export const CopyBlock = () => {
  const { rules } = useContext(ExampleContext);
  const { id, name, ...rulesToCopy } = rules;
  const { copy } = useCopy(JSON.stringify(rulesToCopy));
  return (
    <div
      className="copy_btn"
      onClick={() => {
        copy();
        alert("CSS properties copied");
      }}
    >
      COPY
    </div>
  );
};
