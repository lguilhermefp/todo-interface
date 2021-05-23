import { Action, ActionCreator, Dispatch } from 'redux';
import { ITask } from './reducers';

export const CREATE_TASK = 'CREATE_TASK';
export const createTask = ( guid : string, title : string, description : string, situation: string) => ({
    type: CREATE_TASK,
    payload: { guid, title, description, situation }
});

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = (task : ITask) => ({
    type: REMOVE_TASK,
    payload: { task }
})

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTask = ( guid : string, title : string, description : string, situation: string) => ({
    type: UPDATE_TASK,
    payload: { guid, title, description, situation }
})

export const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';
export const markTaskAsCompleted = (task : ITask) => ({
    type: MARK_TASK_AS_COMPLETED,
    payload: { task }
})

export const LOAD_ONLY_TASK = 'LOAD_ONLY_TASK';
export const loadOnlyTask = (guid : string) => ({
    TYPE: LOAD_ONLY_TASK,
    payload: { guid }
})

export const LOAD_TASKS_IN_PROGRESS = 'LOAD_TASKS_IN_PROGRESS';
export const loadTasksInProgress = () => ({
    type: LOAD_TASKS_IN_PROGRESS
})

export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const loadTasksSuccess = (tasks : any) => ({
    type: 'LOAD_TASKS_SUCCESS',
    payload: { tasks },
})

export const LOAD_TASKS_FAILURE = 'LOAD_TASKS_FAILURE';
export const loadTasksFailure = () => ({
    type: LOAD_TASKS_FAILURE
})