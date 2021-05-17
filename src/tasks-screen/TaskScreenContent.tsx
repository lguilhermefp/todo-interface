import Searchbar from './Searchbar';
import iconPlus from '../img/iconPlus.svg';
import styled from 'styled-components';

function TaskScreenContent() : JSX.Element {
    console.log('hi');
    return(
      <>
        <Searchbar />
        <TaskContentTitle>Tarefas</TaskContentTitle>
        {/* <TaskList /> */}
        <ButtonCreateNewTask />
      </>
    );
  }
  
  const TaskContentTitle = styled.h1`
    margin: 10px 2.5%;
    font-size: 30px;
  `;
  function ButtonCreateNewTask() : JSX.Element {
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
  export default TaskScreenContent;