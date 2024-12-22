import { Task } from "../../types"
import "./task-inflator.component.css"

interface ITaskInflator {
   tasksList:Task[]
   onCompltetTask: (taskId:string,status:boolean)=> void
   onDeleteTask: (taskId:string) => void
}
function TaskInflator (props:ITaskInflator) {

    return <>
    {
        props.tasksList.map((task) => (
        <div key={task.id} className="card">
           <div className="completed-mark"><input type="checkbox" name="task-status" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {props.onCompltetTask(task.id , e.target.checked)}}/></div>
           <div className="task-data">
             <div className="title">{task.title}</div>
             <div className="body">{task.body}</div>
           </div>
          <button className="remove" onClick={_ => props.onDeleteTask(task.id )}><img src="./../../../public/delete.png" alt="delete img" /></button>
        </div>
        ))
    }
    </>
}
export default TaskInflator

/* 

  
*/