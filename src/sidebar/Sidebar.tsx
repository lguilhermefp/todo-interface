import Logo from './Logo';
import UserCard from './UserCard';
import Separator from './Separator';
import SideBarButtons from './SidebarButtons';
import styled from 'styled-components';
import cornerMenu from '../img/cornerMenu.svg';

function Sidebar() : JSX.Element {
  return(
    <Container>
      <SideBarWrapper>
        <Logo />
        <UserCard />
        <Separator />
        <SideBarButtons />
      </SideBarWrapper>
      <div className="corner"><img src={cornerMenu} alt="menu" /></div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: -210px;
  transition-property: left;
  transition-duration: 0.2s;

  :hover,
  :focus{
    left: 0px;
  }

  & > .corner {
    align-items: flex-start;
    position: fixed;
    left: 0;
    margin: 1vh;
    z-index: -1;
  }

  @media (min-width: 600px){
    left: 0px;
  }
`;
const SideBarWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((420px - 100%) * 999);
  flex-grow: 1;
  height: 65vh;
  min-height: 360px;
  width: 100vw;
  background-color: #0047FF;

  & a {
    text-decoration: none;
  }
    height: 100vh;
    max-width: 210px;

`;

export {};
export default Sidebar;