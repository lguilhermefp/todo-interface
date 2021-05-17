import styled from 'styled-components';
import TaskScreenContent from './TaskScreenContent';

function TasksScreen() : JSX.Element {
  console.log('reached TasksScreen')
  return(
    <TasksWrapper>
      <TaskContentWrapper>
        <TaskScreenContent />
      </TaskContentWrapper>
    </TasksWrapper>
  );
}
const TasksWrapper : any = styled.div`
  display: flex;
  flex-basis: calc((420px - 100%) * 999);
  flex-grow: 1;
  height: 100vh;
  width: 400px;
  background-color: white;
  justify-content: center;

  @media (min-width: 420px){
    min-width: 50vw;
    max-width: calc(100vw - 210px);
  }
`;
const TaskContentWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  max-width: 800px;
  background-color: #FFF;

  & > * {
    width: 95%;
  }
`;


export {};
export default TasksScreen;