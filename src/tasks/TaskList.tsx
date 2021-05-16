import React, { Component } from 'react';
import NewTaskForm from './NewTaskForm';
import styled from 'styled-components';
import Task from './Task';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TasksActions from '../store/actions';
import { ITask } from '../store/types';
import { IApplicationState } from '../store/state';
import { Dispatch } from 'redux';

// function TaskList() : JSX.Element  {
//     return(
//         <TasksWrapper>
//             <NewTaskForm />
//             <Task />
//         </TasksWrapper>
//     );
// }

interface IStateProps {
  tasks: ITask[]
}

interface IDispatchProps {
  createTask() : IStateProps
  deleteTask() : IStateProps
  updateTask() : IStateProps
}

type IProps = IStateProps & IDispatchProps;

class TaskList extends Component<IProps> {

  render(){

    const { tasks } = this.props;
    const { createTask } = this.props;
    const { deleteTask } = this.props;
    const { updateTask } = this.props;

    return(
      <TasksWrapper>
        <button className='create-task' onClick={(e)=>(createTask())}></button>
        <button className='delete-task' onClick={(e)=>(deleteTask())}></button>
        <button className='update-task' onClick={(e)=>(updateTask())}></button>
        {tasks.map((task) => <div>{task.title}</div>)}
      </TasksWrapper>
    );
  }
}

const TasksWrapper = styled.div`
  min-height: 38vh;
  margin-bottom: 3vh;
  overflow: auto;

  & > * {
    margin-bottom: 2vh;
  }
`;

const mapStateToProps = (state : IApplicationState) => ({
  tasks: state.tasks,
})

const mapDispatchToProps = (dispatch : Dispatch) => {
  bindActionCreators(TasksActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);