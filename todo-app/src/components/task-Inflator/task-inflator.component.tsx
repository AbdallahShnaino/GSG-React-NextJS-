import { Task, TASK_STATUS } from "../../types";
import "./task-inflator.component.css";

interface ITaskInflator {
  tasksList: Task[];
  onCompleteTask: (taskId: string, status: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}
function TaskInflator({
  onCompleteTask,
  onDeleteTask,
  tasksList,
}: ITaskInflator) {
  return (
    <>
      {tasksList.map((task) => (
        <div
          key={task.id}
          className="card"
          style={{
            borderColor: task.status == TASK_STATUS.ARGENT ? "red" : "#6c63ff",
          }}
        >
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="exampleCheckbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onCompleteTask(task.id, e.target.checked);
              }}
            />
          </div>

          <div className="task-data">
            {task.status == 1 ? (
              <div className="title">{task.title}</div>
            ) : (
              <div className="title">{task.title}</div>
            )}

            <div className="body">{task.body}</div>
          </div>

          <button className="delete" onClick={(_) => onDeleteTask(task.id)}>
            ✖
          </button>
        </div>
      ))}
    </>
  );
}
export default TaskInflator;

/* 

  
*/
