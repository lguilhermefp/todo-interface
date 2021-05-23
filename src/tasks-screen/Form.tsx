import styled from 'styled-components';

const FormStyle = styled.form`
    height: 50vh;
    width: 90vw;
    background-color: #FFFFFF;
    display: grid;
    grid-template-rows: 5% 11% 5% 13% 7% 35% 5.5% 13% 5.5%;
    grid-template-columns: 5% 28% 6% 28% 28% 5%;
    border-radius: 12px;
    border: 2px solid  rgba(0, 0, 0, 0.3);
    min-width: 150px;

    & input, textarea {
        background: none;
        color: #000;
        border: 1px solid #000;
    }
    & button {
        color: #0047FF;
        background: none;
        border: none;
        padding: none;
    }
`;

export default FormStyle;