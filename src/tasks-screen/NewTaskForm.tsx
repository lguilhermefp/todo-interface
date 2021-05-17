import { createTask } from '../redux-store/actions';
import styled from 'styled-components';
import Form from './Form';

function NewTaskForm({ tasks, onCreatePressed } : any){
    const [inputTitleValue, setInputTitleValue] = useState('');
    const [inputDescriptionValue, setInputDescriptionValue] = useState('');
    return(
        <NewTaskFormContainer>
                <h1>title</h1>
                <input
                    className="create-title-input"
                    type="text"
                    value={inputTitleValue}
                    onChange={(e)=>setInputTitleValue(e.target.value)}></input>
                <input
                    className="create-description-input"
                    type="text"
                    value={inputDescriptionValue}
                    onChange={(e)=>setInputDescriptionValue(e.target.value)}></input>
                <button
                    className="create-task"
                    onClick={() => { onCreatePressed(guid, inputTitleValue, inputDescriptionValue, situation);
                        setInputValue('');
                    }}
                    >create task</button>
        </NewTaskFormContainer>
    );
}

const NewTaskFormContainer = styled(Form)`
    background-color: grey;
`;

const mapStateToProps = (state : any) => ({
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed : (text : any) => dispatch(createTask(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);

export default NewTaskForm;
