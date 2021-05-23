import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormStyle from './Form';
import { connect } from 'react-redux';
import { updateTaskRequest } from '../redux-store/thunks';
import { ITask } from '../redux-store/reducers';

function UpdateTaskForm(prop : any, onUpdatePressed : any){

    const [title, setInputTitleValue] = useState('');
    const [description, setInputDescriptionValue] = useState('');
    const [situation, setTaskSituation] = useState('uncompleted');

    return(
        <UpdateFormStyleBackground>
            <UpdateFormStyle>
                <h1 className="atualizar-tarefa">Atualizar tarefa</h1>
                <label className="label-task-name">Nome da tarefa
                    <input
                        className="task-name"
                        type="text"
                        value={title}
                        onChange={(e)=>setInputTitleValue(e.target.value)}></input>
                </label>
                <label className="label-task-description">Descrição
                    <textarea
                        className="task-description"
                        value={description}
                        cols={35}
                        rows={2}
                        onChange={(e)=>setInputDescriptionValue(e.target.value)}></textarea>
                </label>
                
                <button onClick={()=>setTaskSituation('completed')}>completa</button>
                <button onClick={()=>setTaskSituation('uncompleted')}>incompleta</button>
                <Link className="link-form-cancelar" to="/">
                    <button className="button-form-cancelar">CANCELAR</button>
                </Link>
                <Link className="link-form-update-task" to="/">
                    <button
                    className="button-form-update-task">ATUALIZAR</button>
                </Link>
            </UpdateFormStyle>
        </UpdateFormStyleBackground>
    );
}

const UpdateFormStyleBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(190, 195, 205, 0.67);
`;

const UpdateFormStyle = styled(FormStyle)`

    grid-template-rows: 5% 20% 5% 30% 5% 20% 5% 20%;
    position: fixed;
    top: 25vh;
    max-width: 510px;
    left: 5vw;
    & h1 {
        grid-row: 1/2;
        grid-column: 2/6;
        color: #000;
        overflow: visible;
        user-select: none;
    }
    & input,
    & textarea {
        padding: 5px;
        grid-column: 2/6;
        font-size: 18px;
        border-radius: 8px;
        background-color: #eee;
        border: 2px solid rgba(0, 0, 0, 0.5);
        width: 93.5%;
    }
    label {
        position: relative;
        top: 10px;
        font-size: 6px;
    }
    & .label-task-name {
        grid-row: 4/6;
        grid-column: 2/6;
    }
    & .task-name  {
        grid-row: 4/6;
    }
    & .label-task-description {
        grid-row: 6/7;
        grid-column: 2/6;
    }
    & .task-description {
        height: 70%;
        grid-row: 6/7;
        font-size: 17px;
    }
    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        grid-row: 8/9;
        color: #0047FF;
        
    }
    & .link-form-create-task{
        grid-column: 5/6;
    }
    & .link-form-cancelar{
        grid-column: 4/5;
    }
    & button {
        font-size: 15px;
        width: 100%;
        height: 100%;
        border: 2px solid #0047FF;
        border-radius: 5px;
        margin: 0 5px;
    }
    @media (min-width: 600px) {
        left: 20vw;
    }
`;

const mapStateToProps = (state : any) => ({
    tasks: state.tasks,
    isLoading: state.isLoading
})
  
const mapDispatchToProps = (dispatch : any) => ({
    onUpdatePressed: ({guid, title, description, situation} : ITask) => dispatch(updateTaskRequest({guid, title, description, situation}))
})
  
export { UpdateTaskForm };
export default connect(mapStateToProps, mapDispatchToProps)(UpdateTaskForm);
  