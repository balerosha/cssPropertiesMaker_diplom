import { useContext } from "react";
import { ExampleContext } from "../../../../../../context/ExampleContext";

export const RulesBlock = () => {
  const { rules, setRules } = useContext(ExampleContext);
  const rulesArr = Object.entries(rules);
  return (
    <div className="rules_block">
      {rulesArr.map(([property, propertyValue], index) => {
        if (property !== "id" && property !== "name") {
          return (
            <div key={index} className="rules">
              {property}
              <input
                className="rules_input"
                value={propertyValue}
                onChange={(e) => {
                  setRules((prev) => ({
                    ...prev,
                    [property]: e.target.value,
                  }));
                }}
              />
              <button
                onClick={() => {
                  delete rules[property];
                  setRules({ ...rules });
                }}
              >
                x
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};
