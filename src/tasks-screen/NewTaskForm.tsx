import { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../redux-store/actions';
import styled from 'styled-components';
import FormStyle from './Form';

function NewTaskForm({ tasks, onCreatePressed } : any){

    const [inputTitleValue, setInputTitleValue] = useState('');
    const [inputDescriptionValue, setInputDescriptionValue] = useState('');

    function createGuid() {
        function _p8(s : boolean) {
            var p = (Math.random().toString(16)+"000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p ;
        }
        return _p8(false)+_p8(true)+_p8(true)+_p8(false);
    }

    console.log('reached NewTaskForm');

    return(
        <NewFormStyleBackground>
            <NewFormStyle>
                <h1 className="criar-tarefa">Criar tarefa</h1>
                <input
                    className="task-name"
                    type="text"
                    value={inputTitleValue}
                    onChange={(e)=>setInputTitleValue(e.target.value)}></input>
                <textarea
                    className="task-description"
                    value={inputDescriptionValue}
                    cols={35}
                    rows={2}
                    onChange={(e)=>setInputDescriptionValue(e.target.value)}></textarea>
                <button className="button-form-cancelar">Cancelar</button>
                <button
                    className="button-form-create-task"
                    onClick={() => {
                        onCreatePressed(createGuid(), inputTitleValue, inputDescriptionValue, 'notCompleted');
                        setInputTitleValue('');
                        setInputDescriptionValue('')}}>create task</button>
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
    left: 25vw;
    & h1 {
        grid-row: 2/3;
        grid-column: 2/4;
    }
    & input {
        grid-row: 4/5;
        grid-column: 2/6;
    }
    & textarea {
        grid-row: 6/7;
        grid-column: 2/6;
    }
    & button {
        grid-row: 8/9;
        border: 1px solid #000;
    }
    & .button-form-create-task{
        grid-column: 5/6;
    }
    & .button-form-cancelar{
        grid-column: 4/5;
    }
`;

const mapStateToProps = (state : any) => ({
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed : (guid : string, title : string, description : string) => dispatch(createTask(guid, title, description))
});

export { NewTaskForm };
export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);
