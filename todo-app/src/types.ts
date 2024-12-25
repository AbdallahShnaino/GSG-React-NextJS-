
export enum TASK_TYPE {FINISHED,IN_PROGRESS}
export enum TASK_STATUS {NORMAL,AURGENT}

export interface Task {
    id:string;
    title:string;
    body:string;
    type:TASK_TYPE;
    status:TASK_STATUS;
}



