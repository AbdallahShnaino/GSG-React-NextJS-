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
        <div key={task.id} className="card">
          <div className="completed-mark">
            <input
              type="checkbox"
              name="task-status"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onCompleteTask(task.id, e.target.checked);
              }}
            />
          </div>
          <div className="task-data">
            {task.status == 1 ? (
              <div
                style={{
                  color: task.status == TASK_STATUS.ARGENT ? "red" : "inherit",
                }}
                className="title"
              >
                {task.title}
              </div>
            ) : (
              <div className="title">{task.title}</div>
            )}

            <div className="body">{task.body}</div>
          </div>
          <button className="remove" onClick={(_) => onDeleteTask(task.id)}>
            <img src="./../../../public/delete.png" alt="delete img" />
          </button>
        </div>
      ))}
    </>
  );
}
export default TaskInflator;

/* 

  
*/
