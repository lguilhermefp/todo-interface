import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK_DETAILS, MARK_TASK_AS_COMPLETED } from './actions'

export const tasks = (state = [], action : any) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_TASK: {
            const { task } = payload;
            const newTask : any = { task }
            return state.concat(newTask);
        }
        case REMOVE_TASK: {
            const { guid } = payload;
            return state.filter((task : any) => task.guid !== guid);
        }
        case UPDATE_TASK_DETAILS: {
            const { guid, title, description, situation } = payload;
            return state.map((task : any) => {if (task.guid === guid) {return {...state, guid: guid, title: title, description: description, situation: situation}} return {...state}})
        }
        case MARK_TASK_AS_COMPLETED: {
            const { guid, title, description } = payload;
            return state.map((task : any) => {if (task.guid === guid) {return {...state, guid: guid, title: title, description: description, situation: 'completed'}} return {...state} })
        }
    }
}