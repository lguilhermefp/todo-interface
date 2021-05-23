
import { PayloadAction } from 'typesafe-actions';
import { 
    CREATE_TASK,
    REMOVE_TASK, 
    UPDATE_TASK,
    MARK_TASK_AS_COMPLETED,
    LOAD_ONLY_TASK,
    LOAD_TASKS_SUCCESS,
    LOAD_TASKS_IN_PROGRESS,
    LOAD_TASKS_FAILURE
} from './actions';

export const isLoading = (state = false, action : any) => {
    const { type } = action;

    switch(type) {
        case LOAD_TASKS_IN_PROGRESS:
            return true;
        case LOAD_TASKS_SUCCESS:
            return false;
        case LOAD_TASKS_FAILURE:
            return false;
        default:
            return state;
    }
}

export interface ITasks {
    tasks: ITask[]
}

export interface ITask {
    guid: string,
    title: string,
    description: string,
    situation: string
}

const INITIAL_STATE : ITask[] = [];

export const tasks : any = (state : ITask[] = INITIAL_STATE, action : PayloadAction<any, any>) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_TASK: {
            const { guid, title, description } = payload;
            const newTask : ITask = { guid: guid, title: title, description: description, situation: 'uncompleted' };
            return state.concat(newTask);
        };
        case REMOVE_TASK: {
            const { task: taskToRemove } = payload;
            return state.filter((task : ITask) => task.guid !== taskToRemove.guid);
        };
        case UPDATE_TASK: {
            const { task: updatedTask} = payload;
            return state.map((task) => {
                if(task.guid === updatedTask.guid) {
                    return {updatedTask}
                }
            return task;
            })
        };
        case MARK_TASK_AS_COMPLETED: {
            const { task: taskToComplete } = payload;
            return state.map((task : ITask) => {
                if(task.guid === taskToComplete){
                    return taskToComplete;
                }
                return task;
            })
        };
        case LOAD_ONLY_TASK : {
            const { guid } = payload;
            return state.map((task: ITask) => {
                if (task.guid === guid){
                    return task;
                }
                return(task);
            })
        }
        case LOAD_TASKS_SUCCESS: {
            const { tasks } = payload;
            return tasks;
        }
        case LOAD_TASKS_IN_PROGRESS: { return state; }
        case LOAD_TASKS_FAILURE: { return state; }
        default: { return state; }
    }
}