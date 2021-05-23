import { Link } from "react-router-dom";
import iconTasks from '../img/iconTasks.svg';
import iconAbout from '../img/iconAbout.svg';
import styled from 'styled-components';

function SidebarButtons(){
    return(
        <>
            <TasksButton />
            <AboutButton />
        </>
    );
}

function TasksButton() : JSX.Element {
    return(
      <TasksButtonContainer>
        <Link to="/tasks">
            <SideBarButton>
                <img src={iconTasks} className="icon-tasks" alt="tarefas" />
                <h3 className="tasks">Tarefas</h3>
            </SideBarButton>
          </Link>
        </TasksButtonContainer>
    );
}
  
function AboutButton() : JSX.Element {
  return(
    <TasksButtonContainer>
      <Link to="/about">
        <SideBarButton>
          <img src={iconAbout} className="icon-about" alt="sobre" />
          <h3 className="about">Sobre</h3>
        </SideBarButton>
      </Link>
    </TasksButtonContainer>
  );
}

const SideBarButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  border: none;
  border-radius: 4px;
  background-color:#1055FF;
  padding: 0;
  font-family: inherit;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 3vh;
  overflow: visible;
  outline: inherit;

  :hover {
    background-color: #0039CC;
  }

  & a {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;

const TasksButtonContainer = styled.div`
  width: 90%;
  overflow: visible;
`;

export {};
export default SidebarButtons;