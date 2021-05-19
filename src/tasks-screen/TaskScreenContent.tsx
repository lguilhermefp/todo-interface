import Searchbar from './Searchbar';
import iconPlus from '../img/iconPlus.svg';
import TaskList from './TaskList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function TaskScreenContent() : JSX.Element {
  return(
    <>
      <Searchbar />
      <TaskContentTitle>Tarefas</TaskContentTitle>
      <TaskList />
      <ButtonCreateNewTask />
    </>
  );
}

const TaskContentTitle = styled.h1`
  margin: 5vh 2.5% 0;
  font-size: 30px;
`;
function ButtonCreateNewTask() : JSX.Element {

  return(
    <NewTaskFormContainer>
      <Link to="/tasks/modify">
        <button>
          <img src={iconPlus} alt="+" />
          <h3>Nova tarefa</h3>
        </button>
      </Link>
    </NewTaskFormContainer>
    
  );
}
const NewTaskFormContainer = styled.div`
  color: white;
  border-radius: 5px;
  height: 10%;
  width: 25% !important;
  margin: auto 2.5% 2.5% auto;

  & h3 {
    font-size: 15px;
  }
  & button {
    background-color: #0047ff;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

export {};
export default TaskScreenContent;