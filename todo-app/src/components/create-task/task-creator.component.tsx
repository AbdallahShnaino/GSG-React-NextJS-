import { Task, TASK_STATUS, TASK_TYPE } from "../../types";
import "./task-creator.component.css";

function generateUID() {
  var firstPart: number | string = (Math.random() * 46656) | 0;
  var secondPart: number | string = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

interface ITaskCreator {
  onTaskCreated: (newTask: Task) => void;
}
function TaskCreator({ onTaskCreated }: ITaskCreator) {
  let onTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let taskTitle = e.currentTarget["task-title"].value;
    let taskBody = e.currentTarget["task-body"].value;
    let status = e.currentTarget["task-status"].checked;
    let newTask: Task = {
      id: generateUID(),
      title: taskTitle,
      body: taskBody,
      type: TASK_TYPE.IN_PROGRESS,
      status: status ? TASK_STATUS.ARGENT : TASK_STATUS.NORMAL,
    };
    e.currentTarget["task-body"].value = "";
    e.currentTarget["task-title"].value = "";

    onTaskCreated(newTask);
  };

  return (
    <>
      <form onSubmit={onTaskSubmit} className="task-creator-body">
        <input
          id="task-title"
          type="text"
          name="task-title"
          placeholder="Note Title"
        />
        <input
          id="task-body"
          type="text"
          name="task-body"
          placeholder="Note Body"
        />
        <input className="btn-submit" type="submit" />
        <div className="completed-mark">
          Mark as argent
          <input type="checkbox" name="task-status" />
        </div>
      </form>
    </>
  );
}
export default TaskCreator;
