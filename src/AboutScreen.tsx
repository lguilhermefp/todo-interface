import Sidebar from './sidebar/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import { ButtonCorner, BackgroundContainer, BackgroundScreen } from './tasks-screen/TasksScreen';
import iconCorner from './img/cornerMenu.svg';

function AboutScreen(){
    const [sidebar, setSidebar] = useState(true);

    return(
        <>
            <AboutScreenWrapper>
            {sidebar
            ?   <BackgroundContainer>
                    <BackgroundScreen onClick={()=>{setSidebar(false)}}>
                    </BackgroundScreen>
                    <Sidebar />
                </BackgroundContainer>
            :   <ButtonCorner onClick={()=>setSidebar(true)}><img src={iconCorner} alt="cornerMenu"/></ButtonCorner>}
            </AboutScreenWrapper>
            <SobreContainer>
                <h1>Sobre</h1>
                <h3>Já sentiu ansiedade por sequer se lembrar dos inúmeros afazeres do seu dia? Armazene-os aqui, e cheque quando quiser, livrando-se desse mal!</h3>
            </SobreContainer>
        </>
    )
}

const SobreContainer = styled.div`
    margin: 5vw;
    
    @media (min-width: 600px) {
        margin-left: calc(210px + 5vw);
    }
`;

const AboutScreenWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default AboutScreen;