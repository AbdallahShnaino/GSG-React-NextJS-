import './viewer.component.css'

export interface MathViewer {
  statmentBody:string;
  result:string;
}
/*
This component work as a show scrren not more 
*/
function Viewer (prop:MathViewer) {
  let {statmentBody,result} = prop
  return <div className='viewer'>
    <span className='element'>{statmentBody}</span>
    <span className='element equle'>{result==''?'':' = '}</span>
    <span className='element result'>{result}</span>
  </div>
}
export default Viewer