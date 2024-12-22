
export enum TASK_TYPE {FINISHED,IN_PROGRESS}
export interface Task {
    id:string;
    title:string;
    body:string;
    status:TASK_TYPE
}



