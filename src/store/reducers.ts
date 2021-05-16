import { ITasksState, TasksTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE : ITasksState = {
    data: [
        {id: 1, title: 'task 1', description: 'hard', isCompleted: true}
    ],
    error: false,
    loading: false,
}

const reducer: Reducer<ITasksState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TasksTypes.LOAD_REQUEST:
            return { ...state, loading: true};
        case TasksTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data};
        case TasksTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: []}
        default:
            return state;
    }
}

export default reducer;