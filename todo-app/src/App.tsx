import { useState } from 'react';
import './App.css'
import TaskCreator from './components/create-task/task-creator.component';
import TaskInflator from './components/task-Inflator/task-inflator.component';
import TaskSummary from './components/tasks-summary/tasks-summary.component';
import { Task, TASK_TYPE } from './types';

const today = new Date();
const options = { weekday: 'long', day: '2-digit', month: 'short' };
const formattedDate = today.toLocaleDateString('en-GB', options);

let TASKS_LIST:Task[] = [];
function App() {
  let [taskList,setTaskList] = useState<Task[]>(TASKS_LIST)
  let [compltetdTasks,setCompltetdTasks] = useState<number>(0)
  let [createdTasks,setCreatedTasks] = useState<number>(0)
  let onTaskCreated = (newTask:Task) => {
    let newList = [...taskList, newTask]
    setTaskList(_ => newList);
    setCreatedTasks(_ => createdTasks++)
    console.log('onTaskCreated newList',newList)
    console.log('onTaskCreated createdTasks',createdTasks)

  }
  let onCompltetTask = (taskId:string,status:boolean) => {
    let index = taskList.findIndex((v) => v.id == taskId)
    if(status == true) 
      setCompltetdTasks(_ => compltetdTasks++)
    else{
      taskList.length>0?setCompltetdTasks(_ => compltetdTasks--):setCompltetdTasks(_ => 0)
    }
    let obj = {...taskList[index],status:status==true?TASK_TYPE.FINISHED:TASK_TYPE.IN_PROGRESS}
    let arr = [...taskList]
    arr[index] = obj
    setTaskList(_ => arr)
    console.log('onCompltetTask arr',arr)
    console.log('onCompltetTask compltetdTasks',compltetdTasks)
  }
  let onDeleteTask = (taskId:string) => {
    let index = taskList.findIndex((v) => v.id == taskId)
    let arr = [...taskList]
    arr.splice(index,1)
    setTaskList(_ => arr)
    console.log('onDeleteTask arr',arr)

  }
  
 return <>
    <div>{formattedDate}</div>
    <TaskCreator onTaskCreated={onTaskCreated}/>
    <TaskSummary completedTaskNum={compltetdTasks} createdTaskNum={createdTasks}/>
    <TaskInflator onDeleteTask={onDeleteTask} tasksList={taskList} onCompltetTask={onCompltetTask}/>
  </>
}

export default App

/*
taskList.filter(t => t.status == TASK_TYPE.IN_PROGRESS)
*/
