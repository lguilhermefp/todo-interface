import  { createStore, combineReducers } from 'redux';
import { tasks } from './reducers';

const reducers = { tasks };
const rootReducer : any = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer
);
