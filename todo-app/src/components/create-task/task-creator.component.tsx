import { useState } from "react";
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
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskBody, setTaskBody] = useState<string>("");
  const [taskStatus, setTaskStatus] = useState<boolean>(false);

  let onTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTask: Task = {
      id: generateUID(),
      title: taskTitle,
      body: taskBody,
      type: TASK_TYPE.IN_PROGRESS,
      status: taskStatus ? TASK_STATUS.ARGENT : TASK_STATUS.NORMAL,
    };
    onTaskCreated(newTask);
    setTaskTitle("");
    setTaskBody("");
    setTaskStatus(false);
  };
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }
  function handleBodyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskBody(e.target.value);
  }
  function handleStatusChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskStatus(e.target.checked);
  }
  return (
    <>
      <form onSubmit={onTaskSubmit}>
        <div className="input-container">
          <input
            id="task-title"
            type="text"
            value={taskTitle}
            onChange={handleTitleChange}
            name="task-title"
            placeholder="Add the task title ..."
          />
        </div>
        <div className="input-container">
          <input
            id="task-body"
            type="text"
            name="task-body"
            value={taskBody}
            onChange={handleBodyChange}
            placeholder="Add the task Body ..."
          />
        </div>
        <div className="input-container">
          <button className="btn-submit" type="submit">
            Add
          </button>
        </div>
        <div className="completed-mark">
          Mark as argent
          <input
            type="checkbox"
            onChange={handleStatusChange}
            checked={taskStatus}
            name="task-status"
          />
        </div>
      </form>
    </>
  );
}
export default TaskCreator;
