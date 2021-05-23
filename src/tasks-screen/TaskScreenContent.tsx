import Searchbar from './Searchbar';
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
  margin: 3vh 2.5% 0;
  font-size: 30px;
`;
function ButtonCreateNewTask() : JSX.Element {

  return(
    <NewTaskFormContainer>
      <Link to="/tasks/create">
        <button>
          <h3>+</h3>
          <h4>NOVA TAREFA</h4>
        </button>
      </Link>
    </NewTaskFormContainer>
    
  );
}
const NewTaskFormContainer = styled.div`
  display: flex;
  color: white;
  height: 7%;
  width: 23% !important;
  margin: 5vh 2.5% 2.5% auto;

  & a, button {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
  & h3, h4 {
    margin: 0;
    color: #FFF;
  }
  & h3 {
    margin-top: -7px;
    font-size: 17px;
    height: 50%;
    padding-top: 10%;
  }
  & h4 {
    font-size: 11px;
    height: 40%;
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
  media(min-width: width: 18% !important;)
`;

export {};
export default TaskScreenContent;