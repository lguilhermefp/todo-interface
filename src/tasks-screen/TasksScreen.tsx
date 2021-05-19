import styled from 'styled-components';
import TaskScreenContent from './TaskScreenContent';
import Sidebar from '../sidebar/Sidebar';

function TasksScreen() : JSX.Element {
  console.log('reached TasksScreen')
  return(
    <TasksWrapper>
      <Sidebar />
      <div className="task-content-wrapper">
        <TaskContentWrapper>
          <TaskScreenContent />
        </TaskContentWrapper>
      </div>
    </TasksWrapper>
  );
}
const TasksWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((420px - 100%) * 999);
  flex-grow: 1;
  height: 200vh;
  width: 100vw;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-right:-20px;
  overflow: hidden;

  @media (min-width: 420px){
    flex-direction: row;
    height: 100vh;
    justify-content: space-between;

    & > div.task-content-wrapper {
      display: flex;
      min-width: 50vw;
      width: calc(100vw - 300px);
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;
const TaskContentWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  max-width: 500px;
  background-color: #FFF;

  & > * {
    width: 95%;
  }
`;

export {};
export default TasksScreen;