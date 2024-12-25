import "./tasks-summary.component.css"

interface ITaskSummary {
    completedTaskNum:number;
    createdTaskNum:number;
}
function TaskSummary({completedTaskNum,createdTaskNum}:ITaskSummary) {
    return <>
      <div className="container">
        <div className="block" >
            <div>Number of Completed Tasks</div>
            <div>{completedTaskNum}</div>
        </div>
        <div className="block">
           <div>Number of Created Tasks</div>
           <div>{createdTaskNum}</div>
        </div>
      </div>
    </>
}
export default TaskSummary