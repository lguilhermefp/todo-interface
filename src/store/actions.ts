import { action } from 'typesafe-actions';
import { TasksTypes, ITask } from './types';

export const loadRequest = () => action(TasksTypes.LOAD_REQUEST);
export const loadSuccess = (data: ITask[]) => action(TasksTypes.LOAD_SUCCESS);
export const loadFailure = () => action(TasksTypes.LOAD_FAILURE);
export const createTask = (data: ITask) => action(TasksTypes.CREATE_TASK);
export const deleteTask = (data: ITask) => action(TasksTypes.DELETE_TASK);
export const updateTask = (data: ITask) => action(TasksTypes.UPDATE_TASK);