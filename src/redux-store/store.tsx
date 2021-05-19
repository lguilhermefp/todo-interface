import  { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { tasks } from './reducers';

const reducers = { tasks };
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}
const rootReducer : any = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
    createStore(
        persistedReducer,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
