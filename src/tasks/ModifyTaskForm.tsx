import styled from 'styled-components';
import NewTaskFormContainer from './NewTaskForm';

function ModifyTaskForm(){
    return(
        <ModifyTaskFormContainer>
            <div>
                <h1>title</h1>
                <input></input>
                <div></div>
                <button></button>
                <button></button>
            </div>
        </ModifyTaskFormContainer>
    );
}

const ModifyTaskFormContainer = styled(NewTaskFormContainer)``;

export default ModifyTaskForm;