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
    <SideBarButton>
        <Link to="/api/tasks">
            <img src={iconTasks} className="icon-tasks" alt="tarefas" />
            <h3 className="tasks">Tarefas</h3>
        </Link>
    </SideBarButton>
  );
}
  
  function AboutButton() : JSX.Element {
    return(
      <SideBarButton>
        <img src={iconAbout} className="icon-about" alt="sobre" />
        <h3 className="about">Sobre</h3>
      </SideBarButton>
    );
  }

  const SideBarButton : any = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: inherit;
  color: white;
  border-radius: 5px;
  border: none;
  background-color:#1055FF;
  padding: 0;
  font-family: inherit;
  cursor: pointer;
  width: 80%;
  margin: 0 10% 3vh 10%;
  outline: inherit;
`;

export default SidebarButtons;