export enum TasksTypes {
    LOAD_REQUEST = '@store/LOAD_REQUEST',
    LOAD_SUCCESS = '@store/LOAD_SUCCESS',
    LOAD_FAILURE = '@store/LOAD_FAILURE',
    CREATE_TASK = '@store/CREATE_TASK',
    DELETE_TASK = '@store/DELETE_TASK',
    UPDATE_TASK = '@store/UPDATE_TASK'
};

export interface ITask {
    id: number,
    title: string,
    description: string,
    isCompleted: boolean
}

export interface ITasksState {
    data: ITask[],
}