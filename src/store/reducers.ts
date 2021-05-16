import { ITask, ITasksState, TasksTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE : ITasksState = {
    data: [
        {id: 1, title: 'task 1', description: 'hard', isCompleted: true}
    ],
}

const reducer: Reducer<ITasksState> = (state = INITIAL_STATE, action) =>{

    const stateWith = (newTask : ITask) => state.data.concat(newTask);
    const stateWithout = (taskToDelete : ITask) => state.data.filter((task) => task.id !== taskToDelete.id);

    switch(action.type){
        case TasksTypes.CREATE_TASK:{
            const newTask : ITask = {
               id: 2,
               title: 'task 2',
               description: 'desc 2',
               isCompleted: false
            }
            return { ...state, data: stateWith(newTask)};
        }
        case TasksTypes.DELETE_TASK:
            const taskToDelete : ITask = {
               id: 2,
               title: 'task 2',
               description: 'desc 2',
               isCompleted: false
            }
            return { ...state, data: stateWithout(taskToDelete)};
        case TasksTypes.UPDATE_TASK:
            const taskToUpdate : ITask = {
                id: 2,
                title: 'task 2',
                description: 'desc 2',
                isCompleted: false
            }
            const updatedTask : ITask = {
                id: 2,
                title: 'task 2 - something',
                description: 'desc 2 - something',
                isCompleted: false
            }
            var task = stateWithout(taskToUpdate);
            task = stateWith(updatedTask);
            
            return { ...state, data: task}
        default:
            return state;
    }
}

export default reducer;