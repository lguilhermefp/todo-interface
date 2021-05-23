import React, { useEffect } from 'react';
import TaskListItem from './TaskListItem';
import { loadTasks, removeTaskRequest, completeTaskRequest, updateTaskRequest, loadOnlyTaskRequest } from  '../redux-store/thunks';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ITask } from '../redux-store/reducers';

interface IProps {
  tasks : ITask[],
  onRemovePressed() : ITask[],
  onUpdatePressed() : ITask[],
  onCompletePressed() : ITask[]
}

function TaskList({ tasks=[], onRemovePressed, onUpdatePressed, onCompletePressed, isLoading, startLoadingTasks } : any) : JSX.Element  {
  useEffect(() => {
    startLoadingTasks();
  }, []);

  const loadingMessage = <div>Carregando tarefas</div>;
  const content = (
    <TasksWrapper>
      {tasks.map((task : any) =>
        <TaskListItem
          task={task}
          key={task.guid}
          onUpdatePressed={onUpdatePressed}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
          />
      )}
    </TasksWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const TasksWrapper = styled.div`
  height: 50vh;
  overflow: auto;

  & > * {
    margin-bottom: 2vh;
  }
`;

const mapStateToProps = (state : any) => ({
  isLoading: state.isLoading,
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingTasks: () => dispatch(loadTasks()),
    onRemovePressed: (guid : string) => dispatch(removeTaskRequest(guid)),
    onCompletePressed: ({guid, title, description, situation}: ITask) => dispatch(completeTaskRequest(guid)),
    onUpdatePressed: ({guid, title, description, situation} : ITask) => dispatch(updateTaskRequest({guid, title, description, situation})),
    loadOnlyTaskRequest: (guid : string) => {dispatch(loadOnlyTaskRequest(guid))}
})

export { TaskList };
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
