import UpdateTaskForm from './UpdateTaskForm';
import { useState } from 'react';
import styled from 'styled-components';
import iconDone from '../img/iconDone.svg';
import iconDropdown from '../img/iconDropdown.svg';
import iconUpdate from '../img/iconUpdate.svg';
import iconRemove from '../img/iconRemove.svg';
import { connect } from 'react-redux';
import { updateTaskRequest } from '../redux-store/thunks';
import { ITask } from '../redux-store/reducers';

function TaskListItem({task, onRemovePressed, onUpdatedPressed, onCompletePressed} : any) : JSX.Element {
  const [displayDropmenu, setDisplayDropmenu] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  console.log(task);
  console.log(task.situation);
  const taskGuid : string = task.guid;

  return(
        <TaskCardWrapper>
          <h3>{task.title}</h3>
          <h4>{task.description}</h4>
          <button onClick={() => setDisplayDropmenu(!displayDropmenu)} className="dropdown-button">
            <img src={iconDropdown} alt="options"/>
          </button>
          {displayDropmenu ?
          <div className="dropdown-menu-wrapper">
            <button className="button-dropdown-update" onClick={()=>setShowUpdateForm(true)}>
            {showUpdateForm ? <UpdateTaskForm onUpdatedPressed={onUpdatedPressed} guid={taskGuid}/> : null}
              <div className="update-button-wrapper">
                <img src={iconUpdate} alt="update"/>
                <h3>Editar</h3>
              </div>
            </button>
            <button
              className="remove-button"
              onClick={() => onRemovePressed(task.guid)}>
              <img src={iconRemove} alt="remove"/>
                <h3>Apagar</h3>
            </button>
          </div>
          : null}

          <StateTaskWrapper>
            {task.situation !== 'uncompleted'
              ? <Done />
              : <button className="button-in-progress"
                  onClick={() => onCompletePressed(task.guid, task.title, task.description)}>
                  <h3 className="in-progress">Em progresso</h3>
                </button>}
            </StateTaskWrapper>
        </TaskCardWrapper>
  )
}

const TaskCardWrapper = styled.div`
  display: grid;
  height: 17vh;
  grid-template-rows: 5% 15% 10% 20% 10% 10% 10% 10% 10%;
  grid-template-columns: 4% 35% 40% 15% 6%;
  background-color: #0047FF;
  border-radius: 6px;
  & * {
    overflow: hidden;
  }
  & > h3,
  & > h4 {
    color: white;
    line-break: anywhere;
    overflow: visible;
  }
  & > h3{
    font-size: 17px;
    font-weight: 900;
    grid-row: 1/3;
    grid-column: 2/4;
    padding: 0;
    overflow: visible;
  }
  & > h4{
    font-size: 12px;
    letter-spacing: 0.2px;
    grid-row: 3/5;
    grid-column: 2/4;
  }
  & > div {
    grid-row: 7/9;
    grid-column: 2/3;
  }
  & > .button-in-progress {
    grid-row: 7/9;
    grid-column: 4/5;
    max-width: 60px;
  }
  & > .dropdown-button {
    padding-top: 4px;
    grid-row: 2/4;
    grid-column: 5/6;
    background: #0047FF;
    border: none;
    cursor: pointer;
  }
  & .dropdown-menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-row: 3/4;
    grid-column: 4/6;
    height: 6vh;
    overflow: visible;
  }
  & .button-dropdown-update {
    display: flex;
    flex-direction: row;
    height: 50%;
    padding-left: 9px;
  }
  & .update-button-wrapper {
    display: flex;
  }
  & .dropdown-menu-wrapper button {
    display: flex;
    justify-content: space-around;
    background-color: #EEE;
    font-size: 9.5px;
    font-weight: 200;
    width: 100%;
    border: 1px solid #BBB;
  }
  .dropdown-menu-wrapper h3 {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
  img {
    height: 14px;
  }
`;

const StateTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #FFF;
    color: black;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  & .button-done {
    cursor: default;
  }
  & h3 {
    font-size: 10px;
  }
`;

function Done() : JSX.Element {
  return(
    <button className="button-done">
      <img src={iconDone} className="icon-done" alt="concluido" />
      <h3 className="done">Concluído</h3>
    </button>
  )
}

const mapDispatchToProps = (dispatch : any) => ({
  onUpdatePressed: ({guid, title, description, situation} : ITask) => dispatch(updateTaskRequest({guid, title, description, situation}))
})

export { TaskListItem };
export default connect(mapDispatchToProps)(TaskListItem);