import "./App.css";
import { useEffect, useState } from "react";
import { BUTTON_TYPE, calculateExpression } from "./types";
import Viewer from "./components/viewer/viewer.component";
import Button from "./components/button/button.component";
let statementHost: string = "";
interface Btn {
  type: BUTTON_TYPE;
  value: string;
}
function CalcBody() {
  let startNewOperation: boolean = false;
  const btnsList: Btn[] = [
    {
      type: BUTTON_TYPE.NUMBER,
      value: "1",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "2",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "3",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "4",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "5",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "6",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "7",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "8",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "9",
    },
    {
      type: BUTTON_TYPE.NUMBER,
      value: "0",
    },
    {
      type: BUTTON_TYPE.ACTION,
      value: "+",
    },
    {
      type: BUTTON_TYPE.ACTION,
      value: "-",
    },
    {
      type: BUTTON_TYPE.ACTION,
      value: "=",
    },
  ];
  const [calcSentence, setCalcSentence] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    startNewOperation = true;
  }, [result]);

  const onChangeCalcStatement = (value: string) => {
    if (startNewOperation == false) {
      statementHost += value;
      setCalcSentence(() => statementHost);
    } else {
      statementHost = "";
      statementHost += value;
      setCalcSentence(() => statementHost);
      startNewOperation = false;
    }
  };

  const onGetResult = () => {
    let resultToView = calculateExpression(statementHost);
    setResult(() => resultToView.toString());
  };

  return (
    <>
      <div className="calculator-container">
        <Viewer statementBody={calcSentence} result={result} />
        <div className="btns-container">
          {btnsList.map((btn) => {
            if (btn.type === BUTTON_TYPE.NUMBER) {
              return (
                <Button
                  key={btn.value}
                  onChangeCalcStatement={onChangeCalcStatement}
                  type={BUTTON_TYPE.NUMBER}
                  value={btn.value}
                />
              );
            } else if (btn.type === BUTTON_TYPE.ACTION && btn.value === "=") {
              return (
                <Button
                  key={btn.value}
                  onGetResult={onGetResult}
                  type={BUTTON_TYPE.ACTION}
                  value={"="}
                />
              );
            } else {
              return (
                <Button
                  key={btn.value}
                  onChangeCalcStatement={onChangeCalcStatement}
                  type={BUTTON_TYPE.ACTION}
                  value={btn.value}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
export default CalcBody;
