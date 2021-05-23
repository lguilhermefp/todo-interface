import { useState } from 'react';
import { connect } from 'react-redux';
import { addTaskRequest } from '../redux-store/thunks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormStyle from './Form';

function NewTaskForm({ tasks, onCreatePressed } : any){

    const [inputTitleValue, setInputTitleValue] = useState('');
    const [inputDescriptionValue, setInputDescriptionValue] = useState('');

    const createGuid = () => {
        function _p8(s : boolean) {
            var p = (Math.random().toString(16)+"000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p ;
        }
        return _p8(false)+_p8(true)+_p8(true)+_p8(false);
    }

    return(
        <NewFormStyleBackground>
            <NewFormStyle>
                <h1 className="criar-tarefa">Criar tarefa</h1>
                <label className="label-task-name">Nome da tarefa
                    <input
                        className="task-name"
                        type="text"
                        value={inputTitleValue}
                        onChange={(e)=>setInputTitleValue(e.target.value)}></input>
                </label>
                <label className="label-task-description">Descrição
                    <textarea
                        className="task-description"
                        value={inputDescriptionValue}
                        cols={35}
                        rows={2}
                        onChange={(e)=>setInputDescriptionValue(e.target.value)}></textarea>
                </label>
                <Link className="link-form-cancelar" to="/tasks">
                    <button className="button-form-cancelar">CANCELAR</button>
                </Link>
                <Link className="link-form-create-task" to="/tasks">
                    <button
                    className="button-form-create-task"
                    onClick={() => {
                        onCreatePressed(createGuid(), inputTitleValue, inputDescriptionValue, 'uncompleted');
                        setInputTitleValue('');
                        setInputDescriptionValue('')}}>CRIAR TAREFA</button>
                </Link>
            </NewFormStyle>
        </NewFormStyleBackground>
    );
}
const NewFormStyleBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(190, 195, 205, 0.67);
`;

const NewFormStyle = styled(FormStyle)`
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
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed: (guid : string, title : string, description : string, situation : string) => dispatch(addTaskRequest({guid, title, description, situation}))
});

export { NewTaskForm };
export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);
