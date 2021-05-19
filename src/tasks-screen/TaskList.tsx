import TaskListItem from './TaskListItem';
import { removeTask, updateTaskDetails, markTaskAsCompleted } from '../redux-store/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

function TaskList({ tasks=[], onRemovePressed, onUpdatePressed, onCompletePressed } : any) : JSX.Element  {
    return(
        <TasksWrapper>
              {tasks.map((task : any) => 
                <TaskListItem
                  task={task}
                  key={task.guid}
                  onRemovePressed={onRemovePressed}
                  onUpdatePressed={onUpdatePressed}
                  onCompletePressed={onCompletePressed}
                  />
              )}
        </TasksWrapper>
    );
}

const TasksWrapper = styled.div`
  min-height: 59vh;
  margin-bottom: 3vh;
  overflow: auto;

  & > * {
    margin-bottom: 2vh;
  }
`;

const mapStateToProps = (state : any) => ({
    tasks: state.tasks,
})

const mapDispatchToProps = (dispatch : any) => ({
    onRemovePressed: (guid : string) => dispatch(removeTask(guid)),
    onUpdatePressed: (guid : string, title : string, description : string) => dispatch(updateTaskDetails(guid, title, description)),
    onCompletePressed: (guid : string) => dispatch(markTaskAsCompleted(guid))
})

export { TaskList };
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
