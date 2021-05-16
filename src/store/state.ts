import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';
import { ITasksState } from './types';

export interface IApplicationState {
    tasks: ITasksState
}

const store : Store<IApplicationState> = createStore(rootReducer)

export default store;