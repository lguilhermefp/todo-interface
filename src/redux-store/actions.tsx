export const CREATE_TASK = 'CREATE_TASK';
export const createTask = ( guid : string, title : string, description : string) => ({
    type: CREATE_TASK,
    payload: { guid, title, description }
});

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = (guid : string) => ({
    type: REMOVE_TASK,
    payload: { guid }
})

export const UPDATE_TASK_DETAILS = 'UPDATE_TASK_DETAILS';
export const updateTaskDetails = (guid : string, title : string, description : string) => ({
    type: UPDATE_TASK_DETAILS,
    payload: { guid, title, description }
})

export const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';
export const markTaskAsCompleted = (guid : string) => ({
    type: MARK_TASK_AS_COMPLETED,
    payload: { guid }
})

