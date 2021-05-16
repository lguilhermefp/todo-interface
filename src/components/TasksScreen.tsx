import TaskList from '../tasks/TaskList';
import iconSearch from '../img/iconSearch.svg';
import iconPlus from '../img/iconPlus.svg';
import styled from 'styled-components';

function TaskScreen() : JSX.Element {
  return(
    <TasksWrapper>
      <TaskContentWrapper>
        <TaskContent />
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
function TaskContent() : JSX.Element {
  return(
    <>
      <Search />
      <TaskContentTitle>Tarefas</TaskContentTitle>
      <TaskList />
      <CreateNewTask />
    </>
  );
}
function Search() : JSX.Element {
  return(
    <SearchBarWrapper>
      <SearchBar>
        <img src={iconSearch} alt="pesquisa"></img>
        <input type="text" />
      </SearchBar>
    </SearchBarWrapper>
  );
}
const SearchBarWrapper = styled.div`
  display: flex;
  margin-top: 9vh;
  height: 14vh;
  justify-content: bottom;
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
  width: 100%;
  border-radius: 3px;
  background-color: #000;
  opacity: 0.12;

  & > img {
    width: 30%;
  }
  & > input {
    width: 70%;
  }
`;
const TaskContentTitle = styled.h1`
  margin: 10px 2.5%;
  font-size: 30px;
`;
function CreateNewTask() : JSX.Element {
  return(
    <ButtonNewTask>
      <img src={iconPlus} alt="+" />
      <h3>Nova tarefa</h3>
    </ButtonNewTask>
  );
}
const ButtonNewTask = styled.button`
  background-color: #0047ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  height: 10%;
  width: 25%;
  margin: auto 2.5% 2.5% auto;

  & > h3 {
    font-size: 15px;
  }
`;

export {};
export default TaskScreen;