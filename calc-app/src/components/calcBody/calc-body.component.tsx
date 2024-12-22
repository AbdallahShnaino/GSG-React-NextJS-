import { useState } from 'react'
import { BUTTON_TYPE, calculateExpression } from '../../types'
import Button from '../button/button.component'
import Viewer from '../viewer/viewer.component'
import './calc-body.component.css'

let statmentHost:string = ''
function CalcBody () {
  let [clacSentence,setClacSentence] = useState<string>('')
  let [result,setResult] = useState<string>('')  
  let onChangeCalcStatment = (value:string) => {
    // appending value entered by user
    statmentHost+=value;
    // the html need to know that the statment has changed
    setClacSentence(() => statmentHost)

  }
  let onGetResult = () => {
    let result = calculateExpression(statmentHost)
    setResult ( _ => result+"")
    statmentHost = ""
    setClacSentence(() => "")
  }

  return <>
  <div>
     <Viewer statmentBody={clacSentence} result={result}/>
    <div>
     <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'1'}/>
     <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'2'}/>
     <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'3'}/>
    </div>
    <div>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'4'}/>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'5'}/>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'6'}/>
    </div>
    <div>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'7'}/>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'8'}/>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'9'}/>
    </div>
    <div>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.NUMBER} value={'0'}/>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.ACTION} value={'+'}/>
       <Button onChangeCalcStatment={onChangeCalcStatment} type={BUTTON_TYPE.ACTION} value={'-'}/>
    </div>
    <Button onGetResult={onGetResult} type={BUTTON_TYPE.ACTION} value={'='}/>
  </div>
  </>
  
}
export default CalcBody