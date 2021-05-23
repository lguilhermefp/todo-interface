import styled from 'styled-components';
import TaskScreenContent from './TaskScreenContent';
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';
import cornerMenu from '../img/cornerMenu.svg';

function TasksScreen() : JSX.Element {
  const [sidebar, setSidebar] = useState(true);
  return(
    <>
    {sidebar
    ? <BackgroundContainer>
        <BackgroundScreen onClick={()=>{setSidebar(false)}}>
        </BackgroundScreen>
        <Sidebar />
      </BackgroundContainer>
    : <ButtonCorner onClick={()=>setSidebar(true)}><img src={cornerMenu} alt="cornerMenu"/></ButtonCorner>}
      <TasksWrapper>
        <div className="task-content-wrapper">
          <TaskContentWrapper>
            <TaskScreenContent />
          </TaskContentWrapper>
        </div>
      </TasksWrapper>
    </>
  );
}

export const BackgroundContainer = styled.div`
  & > * {
    left: 0;
  }
`;
export const ButtonCorner = styled.button`
  margin: 1vh;
`;

export const BackgroundScreen = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 0;
  top: 0;
  left: 210px;
  background-color: rgba(50, 50, 60, 0.5);
  border: 0;
  z-index: 2;
  cursor: default;

  & :hover{
    display: none;
    .task-content-wrapper {
      display: none;
      width: 90vw;
    }
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-right:-20px;
  overflow: hidden;

  & > * {
    left: 0;
  }
  & > .task-container-wrapper {
    width: calc(100vw - 210px);
  }
  & > .task-content-wrapper {
    width: 90vw;
  }

  @media (min-width: 600px){
    justify-content: space-between;

    & > div.task-content-wrapper {
      display: flex;
      position: relative;
      left: 210px;
      width: 50vw;
      width: calc(100vw - 300px);
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    & > * {
      position: static;
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
  max-width: 550px;
  background-color: #FFF;

  & > * {
    width: 95%;
  }
`;

export {};
export default TasksScreen;