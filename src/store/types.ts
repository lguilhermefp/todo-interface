export enum TasksTypes {
    LOAD_REQUEST = '@store/LOAD_REQUEST',
    LOAD_SUCCESS = '@store/LOAD_SUCCESS',
    LOAD_FAILURE = '@store/LOAD_FAILURE'
};

export interface ITask {
    id: number,
    title: string,
    description: string,
    isCompleted: boolean
}

export interface ITasksState {
    readonly data: ITask[],
    readonly loading: boolean,
    readonly error: boolean
}