import { Action, ActionCreator, Dispatch } from 'redux';
import {
    createTask,
    updateTask,
    removeTask,
    markTaskAsCompleted,
    loadOnlyTask,
    loadTasksInProgress,
    loadTasksSuccess,
    loadTasksFailure
} from "./actions";
import { ITask } from './reducers';

interface ITasks {
    tasks: ITask[]
}

const url = 'http://localhost:3333/api/tasks';

export const loadOnlyTaskRequest = (guid : string) => async (dispatch: any, getState : ITasks) => {
    try {
        const response = await fetch(`${url}/${guid}`)
        const task = await response.json();
        dispatch(loadOnlyTask(task));
    }catch(e){
        window.alert(e);
    }
}

export const loadTasks = () => async (dispatch : Dispatch, getState : ITasks | Boolean) => {
    try {
        dispatch(loadTasksInProgress());
        const response = await fetch(`${url}/`)
        const tasks = await response.json();
        dispatch(loadTasksSuccess(tasks));
    } catch(e) {
        dispatch(loadTasksFailure());
    }
}
export const addTaskRequest = ({ guid, title, description, situation } : ITask) => async (dispatch : Dispatch) => {
    try {
        const body = JSON.stringify({ guid, title, situation, description });
        await fetch(`${url}/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body
        });
        if(title.length < 1){throw new Error('Insira um título para sua tarefa')};
        if(title.length > 100){throw new Error('O título inserido é grande demais')};
        if(description.length > 1024){throw new Error('A descrição é grande demais!')}
        dispatch(createTask(guid, title, description, situation));
    } catch(e){
        window.alert(e.message);
    }
}
export const updateTaskRequest = ({ guid, title, description, situation } : ITask) => async (dispatch : Dispatch) => {
    try {
        const body = JSON.stringify({ guid, title, description, situation })
        await fetch(`${url}/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body
        }); 
        if(title.length < 1){throw new Error('Insira um título para sua tarefa')};
        if(title.length > 100){throw new Error('O título inserido é grande demais')};
        dispatch(updateTask( guid, title, description, situation ));
    } catch(e) {
        window.alert(e.message);
    }
}

export const removeTaskRequest = (guid: string) => async (dispatch : Dispatch) => {
    try {
        const response = await fetch(`${url}/${guid}`, {
            method: 'delete'
        });
        const removedTask = await response.json();
        if(!removedTask){throw new Error('Essa tarefa não existe')}
        dispatch(removeTask(removedTask));
    } catch(e) {
        window.alert(e.message);
    }
}

export const completeTaskRequest = (guid : string) => async (dispatch : Dispatch) => {
    try {
        const response = await fetch(`${url}/${guid}`, {
            method: 'patch'
        }); 
        const completedTask = await response.json();
        dispatch(markTaskAsCompleted(completedTask));
    } catch(e) {
        window.alert(e);
    }
}
