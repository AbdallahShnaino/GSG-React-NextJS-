import "./tasks-summary.component.css";

interface ITaskSummary {
  completedTaskNum: number;
  createdTaskNum: number;
}
function TaskSummary({ completedTaskNum, createdTaskNum }: ITaskSummary) {
  return (
    <>
      <div className="statistics">
        <div className="block">
          <div>Number of Completed Tasks</div>
          <div id="completedTaskNum">{completedTaskNum}</div>
        </div>
        <div className="block">
          <div>Number of Created Tasks</div>
          <div id="createdTaskNum">{createdTaskNum}</div>
        </div>
      </div>
    </>
  );
}
export default TaskSummary;
