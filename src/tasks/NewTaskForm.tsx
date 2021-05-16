import React, {useState} from 'react';
import styled from 'styled-components';

function NewTaskForm() : JSX.Element {
    const [inputTaskTitle, setinputTaskTitle] = useState('');
    const [inputTaskDescription, setinputTaskDescription] = useState('');
    return(
        <NewTaskFormContainer>
            <div>
                <h1>title</h1>
                <input
                    type='text'
                    placeholder="Nome da tarefa"
                    value={inputTaskTitle}
                    onChange={e => setinputTaskTitle(e.target.value)}
                ></input>
                <input
                    type='text'
                    placeholder="Descricao da tarefa"
                    value={inputTaskDescription}
                    onChange={e => setinputTaskDescription(e.target.value)}
                ></input>
                <div></div>
                <button className="createTask">criar</button>
                <button></button>
            </div>
        </NewTaskFormContainer>
    );
}

const NewTaskFormContainer = styled.div`
    display: flex;
    width: 50vw;
    height: 50vh;
    background-color: ${'red'};
    position: fixed;
    top: 25vh;
    left: 25vw;
    z-index: 1;
`;

export { NewTaskFormContainer };
export default NewTaskForm;