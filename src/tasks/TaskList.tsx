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
  loadRequest() : void
}

type IProps = IStateProps & IDispatchProps;

class TaskList extends Component<IProps> {

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render(){

    const { tasks } = this.props;

    return(
      <TasksWrapper>
        {tasks.map((task) => task.title)}
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