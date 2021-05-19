/* eslint-disable jest/valid-expect */
import { configureStore } from './redux-store/store';
import { tasks } from './redux-store/reducers';
import { hasUncaughtExceptionCaptureCallback } from 'process';

describe('post reducer', ()=> {
    it('should return the initial state', ()=>{
        hasUncaughtExceptionCaptureCallback(configureStore(undefined, {})).toEqual({});
    })
})

describe('the tasks reducer', () => {
    it('adds a new task', () => {
        const fakeTask = { guid:'123', text: 'hello', description: '', situation: 'notCompleted'}
        const fakeAction = {
            type:'CREATE_TASK',
            payload: {
                task: fakeTask
            }
        };
        const originalState = { data: []};

        const expected = {
            data: [fakeTask]
        }
        const actual = tasks(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
})

describe('this tasks reducer', () => {
    it('set a task as completed', () => {
        const guid = '3f821d60-b842-11eb-9854-1650d5986f03';
        const fakeAction = {
            type: 'MARK_TASK_AS_COMPLETED',
            payload: {
                guid: guid
            }
        }
        const originalState = {data: [{guid:"3f821d60-b842-11eb-9854-1650d5986f03", title:"tarefa", description:"a", situation: "uncompleted"}]}
        const expected = {data: [{guid:"3f821d60-b842-11eb-9854-1650d5986f03", title:"tarefa", description:"a", situation: "completed"}]}
        const actual = tasks(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
})