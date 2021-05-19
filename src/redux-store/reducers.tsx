
import { PayloadAction } from 'typesafe-actions';
import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK_DETAILS, MARK_TASK_AS_COMPLETED } from './actions';

export interface ITask {
    guid: string,
    title: string,
    description: string,
    situation: string
}

const INITIAL_STATE : ITask[] = [{
    guid: '1',
    title: '1',
    description: '1',
    situation: 'completed'
}];

export const tasks = (state = INITIAL_STATE, action : PayloadAction<string, ITask>) => {
    const { type, payload } = action;

    switch(type) {
        case CREATE_TASK: {
            const { guid, title, description } = payload;
            const newTask : ITask = { guid, title, description, situation: 'notCompleted' };
            return state.concat(newTask);
        };
        case REMOVE_TASK: {
            const { guid } = payload;
            return state.filter((task : ITask) => task.guid !== guid);
        };
        case UPDATE_TASK_DETAILS: {
            const { guid, title, description, situation } = payload;
            return state.map((task : ITask) => {
                if (task.guid === guid)
                    return {...state, guid: guid, title: title, description: description, situation: situation}
                return {...state};
            })
        };
        case MARK_TASK_AS_COMPLETED: {
            const { guid, title, description } = payload;
            return state.map((task : ITask) => {
                if (task.guid === guid)
                    return {...state, guid: guid, title: title, description: description, situation: 'completed'};
                return {...state};
            })
        };
    }
    return state;
}