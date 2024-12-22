import { Task,TASK_TYPE } from "../../types"
import "./task-creator.component.css"

function generateUID() {
  var firstPart :number|string= (Math.random() * 46656) | 0;
  var secondPart :number|string= (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

interface ITaskCreator {
  onTaskCreated: (newTask:Task) => void
}
function TaskCreator(props:ITaskCreator) {
  let onTaskSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let taskTitle = e.currentTarget['task-title'].value
    let taskBody = e.currentTarget['task-body'].value
    let newTask:Task = {id:generateUID(),title:taskTitle,body:taskBody,status:TASK_TYPE.IN_PROGRESS} 
    e.currentTarget['task-title'].value = ''
    e.currentTarget['task-body'].value = ''
    props.onTaskCreated(newTask)
  } 
    return <>
    <form onSubmit={onTaskSubmit} className="task-creator-body">
      <input id="task-title" type="text" name="task-title" placeholder="Note Title"/>
      <input id="task-body" type="text" name="task-body" placeholder="Note Body" />
      <input className="btn-submit" type="submit" />
    </form>
    </>
}
export default TaskCreator