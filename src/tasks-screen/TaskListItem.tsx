import { useState } from 'react';
import styled from 'styled-components';
import iconDone from '../img/iconDone.svg';
import UpdateTaskForm from './UpdateTaskForm';
import Dropdown, { DropdownButton } from './react-dropdown';

function TaskListItem({task, onRemovePressed, onCompletePressed} : any) : JSX.Element {

  return(
        <TaskCardWrapper>
          <h3>{task.title}</h3>
          <h4>{task.description}</h4>
            <div className="dropdown">
              <button
                className="remove-button"
                onClick={() => onRemovePressed(task.guid)}>Remove</button>
              <button className="update-button"></button>

              <button className="button-complete"></button>
                
            </div>
            <StateTaskWrapper>
              {task.situation === 'completed'
                ? <Done />
                : <button
                    onClick={() => onCompletePressed(task.guid)}>
                    <img src={iconDone} className="icon-done" alt="em-progresso" />
                    <h3 className="in-progress">Em progresso</h3>
                  </button>}
                  <DropdownButton title="Dropdown button" className="dropdown">
                    <Dropdown.Item href="#Action-1">Atualizar</Dropdown.Item>
                    <Dropdown.Item href="#Action-2">Apagar</Dropdown.Item>
                  </DropdownButton>
            </StateTaskWrapper>
        </TaskCardWrapper>
  )
}

const TaskCardWrapper = styled.div`
  display: grid;
  height: 18vh;
  grid-template-rows: 15% 15% 10% 20% 25% 15%;
  grid-template-columns: 4% 20% 66% 10%;
  background-color: #0047FF;
  border-radius: 6px;

  & > h3{
    grid-row: 2/3;
    grid-column: 2/4;
  }
  & > h4{
    grid-row: 3/5;
    grid-column: 2/4;
  }
  & > div {
    grid-row: 5/6;
    grid-column: 2/3;
  }
  & > button {
    grid-row: 2/4;
    grid-column: 4/5;
  }
  & > .dropdown {
    grid-row: 2/3;
    grid-column: 4/5;
  }
`;

const StateTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFF;
  color: black;
  border-radius: 5px;
`;

function Done() : JSX.Element {
  return(
    <>
      <img src={iconDone} className="icon-done" alt="concluido" />
      <h3 className="done">Concluído</h3>
    </>
  )
}

export default TaskListItem;