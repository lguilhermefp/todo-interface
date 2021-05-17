import styled from 'styled-components';
import Form from './Form';

function UpdateTaskForm(){
    return(
        <UpdateTaskFormContainer>
            <div>
                <h1>title</h1>
                <input></input>
                <div></div>
                <button></button>
                <button></button>
            </div>
        </UpdateTaskFormContainer>
    );
}

const UpdateTaskFormContainer = styled(Form)`
    background-color: grey;
`;

export default UpdateTaskForm;