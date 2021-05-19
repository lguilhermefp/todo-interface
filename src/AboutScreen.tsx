import Sidebar from './sidebar/Sidebar';
import styled from 'styled-components';

function AboutScreen(){
    return(
        <AboutScreenWrapper>
            <Sidebar />
            <h1>about</h1>
        </AboutScreenWrapper>
    )
}

const AboutScreenWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default AboutScreen;