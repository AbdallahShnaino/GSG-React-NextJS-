import { BUTTON_TYPE } from "../../types";
import './button.component.css'
interface BtnData {
    type: BUTTON_TYPE;
    value: string
    //listner for clicked buttons
    onChangeCalcStatment?:(value: string) => void
    //listner for = buttons
    onGetResult?:() => void

}
/*
I useed if else if expression to draw the buttons with different styles
color-num to give the button blue color
color-action to give the button orange color
color-result to give the button green color
*/
function Button (props: BtnData) {
  let { value , type ,onChangeCalcStatment,onGetResult} = props
    if(type == BUTTON_TYPE.NUMBER) {
        return <button onClick={()=> onChangeCalcStatment?.(value)} className="btn bg-color-num">{value}</button>
    } else if(type == BUTTON_TYPE.ACTION && value != '=') {
        return <button onClick={ _ => onChangeCalcStatment?.(value)} className="btn bg-color-action">{value}</button>
    } else if(type == BUTTON_TYPE.ACTION && value == '=') {
        return <button onClick={_ => onGetResult?.()} className="btn bg-color-result">{value}</button>
    }

}
export default Button