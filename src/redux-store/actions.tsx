enum situation {
    notCompleted = 'notClompleted',
    completed = 'completed'
}

interface ITask {
    guid: string,
    title: string,
    description: string,
    situation: situation
}

export const CREATE_TASK = 'CREATE_TASK';
export const createTASK = (task : ITask) => ({
    type: CREATE_TASK,
    payload: { ...task }
});

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = (guid : string) => ({
    type: REMOVE_TASK,
    payload: { guid }
})

export const UPDATE_TASK_DETAILS = 'UPDATE_TASK_DETAILS';
export const updateTaskDetails = (task: ITask) => ({
    type: UPDATE_TASK_DETAILS,
    payload: { ...task }
})

export const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';
export const markTaskAsCompleted = (guid : string) => ({
    type: MARK_TASK_AS_COMPLETED,
    payload: { guid }
})


