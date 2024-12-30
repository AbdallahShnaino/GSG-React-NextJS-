import { BUTTON_TYPE } from "../../types";
import "./button.component.css";
interface BtnData {
  type: BUTTON_TYPE;
  value: string;
  onChangeCalcStatement?: (value: string) => void;
  onGetResult?: () => void;
}

function Button(props: BtnData) {
  const { value, type, onChangeCalcStatement, onGetResult } = props;
  if (type == BUTTON_TYPE.NUMBER) {
    return (
      <button
        onClick={() => onChangeCalcStatement?.(value)}
        className="btn bg-color-num"
      >
        {value}
      </button>
    );
  } else if (type == BUTTON_TYPE.ACTION && value != "=") {
    return (
      <button
        onClick={(_) => onChangeCalcStatement?.(value)}
        className="btn bg-color-action"
      >
        {value}
      </button>
    );
  } else if (type == BUTTON_TYPE.ACTION && value == "=") {
    return (
      <button onClick={() => onGetResult?.()} className="btn bg-color-result">
        {value}
      </button>
    );
  }
}
export default Button;
