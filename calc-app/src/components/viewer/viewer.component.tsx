import './viewer.component.css'

export interface MathViewer {
  statementBody:string;
  result:string;
}

function Viewer (prop:MathViewer) {
  let {statementBody,result} = prop
  return <div className='viewer'>
    <span>{statementBody}</span>
    <span>{result==''?'':' = '}</span>
    <span>{result}</span>
  </div>
}
export default Viewer