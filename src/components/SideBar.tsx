import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg';
import iconTasks from '../img/iconTasks.svg';
import iconAbout from '../img/iconAbout.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SideBar() : JSX.Element {
    return(
        <SideBarWrapper>
          <Logo />
          <User />
          <Separator />
          <TasksButton />
          <AboutButton />
        </SideBarWrapper>
    );
}

function Logo() : JSX.Element {
  return(
    <LogoIcon src={logo} alt="WLS Soluções" />
  );
}

function TasksButton() : JSX.Element {

    return(
      <Link to="/api/tasks">
        <SideBarButton>
          <img src={iconTasks} className="icon-tasks" alt="tarefas" />
          <h3 className="tasks">Tarefas</h3>
        </SideBarButton>
      </Link>
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
  
  function User() : JSX.Element {
    return(
      <UserWrapper>
          <Avatar src={avatar} alt="avatar" />
        <UserNameAndFunctionWrapper>
          <UserName>Nome</UserName>
          <UserFunction>Função</UserFunction>
        </UserNameAndFunctionWrapper>
      </UserWrapper>
    );
  }
  
function Separator() : JSX.Element {
  return <BarSeparator></BarSeparator>;
}
  
const LogoIcon = styled.img`
  display: flex;
  width: 75%;
  min-width: 190px;
  margin-top: 4vh;
`;
const SideBarWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((420px - 100%) * 999);
  flex-grow: 1;
  height: 65vh;
  min-height: 360px;
  width: 400px;
  background-color: #0047FF;

  & > * {
    text-decoration: none;
  }

  @media(min-width: 420px){
    height: 100vh;
    max-width: 210px;
  }
`;
const UserWrapper : any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  margin: 0 7.5%;
  height: 7vh;
  margin-top: 5vh;
  background-color: #333;
  padding: 5%;
  border-radius: 3px;
`;
const Avatar : any = styled.img`
  height: 35px;
  width: 35px;
  object-fit: cover;
  padding: 0 3%;
`;
const UserNameAndFunctionWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4%;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
const UserName : any = styled.h3`
  height: 40%;
  font-size: 17px;
  color: white;
  margin: 0 0 1vh 0;
`;
const UserFunction : any = styled.h4`
  height: 50%;
  font-size: 16px;
  color: #C9C9C9;
  margin: 0;
`;
const BarSeparator : any = styled.div`
  background-color: white;
  width: 80%;
  margin: 10%;
  height: 1px;
`;
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

export {};
export default SideBar;