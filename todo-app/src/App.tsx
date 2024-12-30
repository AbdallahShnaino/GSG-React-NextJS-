import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/create-task/task-creator.component";
import TaskInflator from "./components/task-Inflator/task-inflator.component";
import TaskSummary from "./components/tasks-summary/tasks-summary.component";
import { Task, TASK_TYPE } from "./types";

const today = new Date();
const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "short",
};
const formattedDate = today.toLocaleDateString("en-GB", options);

let TASKS_LIST: Task[] = [];
function App() {
  let [taskList, setTaskList] = useState<Task[]>(TASKS_LIST);
  let [completedTasks, setCompletedTasks] = useState<number>(0);
  let [createdTasks, setCreatedTasks] = useState<number>(0);
  
  let onTaskCreated = (newTask: Task) => {
    let newList = [...taskList, newTask];
    setTaskList(() => newList);
    setCreatedTasks(() => createdTasks++);
  };
  let onCompleteTask = (taskId: string, type: boolean) => {
    const index = taskList.findIndex((task) => task.id === taskId);
    if (type) {
      setCompletedTasks((prev) => prev + 1);
    } else {
      setCompletedTasks((prev) => (taskList.length > 0 ? prev - 1 : 0));
    }
    const updatedTask = {
      ...taskList[index],
      type: type ? TASK_TYPE.FINISHED : TASK_TYPE.IN_PROGRESS,
    };
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = updatedTask;
    setTaskList(updatedTaskList);
  };
  let onDeleteTask = (taskId: string) => {
    let index = taskList.findIndex((v) => v.id == taskId);
    let arr = [...taskList];
    arr.splice(index, 1);
    setTaskList(() => arr);
  };

  return (
    <>
      <div>{formattedDate}</div>
      <TaskCreator onTaskCreated={onTaskCreated} />
      <TaskSummary
        completedTaskNum={completedTasks}
        createdTaskNum={createdTasks}
      />
      <TaskInflator
        onDeleteTask={onDeleteTask}
        tasksList={taskList}
        onCompleteTask={onCompleteTask}
      />
    </>
  );
}

export default App;
