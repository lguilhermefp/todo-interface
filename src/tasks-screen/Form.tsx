import styled from 'styled-components';

const FormStyle = styled.div`
    height: 50vh;
    width: 50vw;
    background-color: #FFFFFF;
    display: grid;
    grid-template-rows: 5% 11% 5% 19% 10% 33% 3% 10% 4%;
    grid-template-columns: 5% 30% 10% 30% 20% 5%;

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