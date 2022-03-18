import { useAddRuleBlockHook } from "./hooks/useAddRuleBlockHook";
type AddRuleBlockType = {
  setIsOpen: () => void;
};
export const AddRuleBlock = ({ setIsOpen }: AddRuleBlockType) => {
  const { values, setValues, setRules } = useAddRuleBlockHook();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="addRule_block">
      <input
        className="addRule_inputs"
        name="property"
        value={values.property}
        onChange={handleChange}
        list="rules"
        autoComplete="off"
      />
      <datalist id="rules">
        <option value="text-align"></option>
        <option value="border"></option>
        <option value="border-radius"></option>
        <option value="background-color"></option>
        <option value="background"></option>
        <option value="color"></option>
        <option value="font-size"></option>
        <option value="font-family"></option>
        <option value="font-weight"></option>
        <option value="width"></option>
        <option value="height"></option>
        <option value="padding"></option>
        <option value="box-sizing"></option>
      </datalist>
      :
      <input
        className="addRule_inputs"
        name="propertyValue"
        value={values.propertyValue}
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        className="add_btn"
        onClick={() => {
          if (values.property && values.propertyValue) {
            setRules((prev) => ({
              ...prev,
              [values.property]: values.propertyValue,
            }));

            setIsOpen();
          }
        }}
      >
        Add rule
      </button>
      <button className="close_btn" onClick={() => setIsOpen()}>
        close
      </button>
    </div>
  );
};
