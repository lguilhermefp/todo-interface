import styled from 'styled-components';
import iconDone from '../img/iconDone.svg';

function TaskCard() : JSX.Element {
    return(
        <TaskCardWrapper>
          <h3>title</h3>
          <h4>Descrição da tarefa.</h4>
          <StateOfTask />
          <button></button>
          <div>
            <button className="remove-button">Remove</button>
          </div>
        </TaskCardWrapper>
    );
}

const TaskCardWrapper = styled.div`
  display: grid;
  height: 24vh;
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
`;

function StateOfTask() : JSX.Element {
  return(
    <StateTaskWrapper>
    </StateTaskWrapper>
  );
}

const StateTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
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
function InProgress() : JSX.Element {
  return(
    <>
      <img src={iconDone} className="icon-done" alt="em-progresso" />
      <h3 className="in-progress">Em progresso</h3>
    </>
  );
}

export default TaskCard;