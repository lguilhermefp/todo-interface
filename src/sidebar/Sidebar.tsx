import Logo from './Logo';
import UserCard from './UserCard';
import Separator from './Separator';
import SideBarButtons from './SidebarButtons';
import styled from 'styled-components';
import cornerMenu from '../img/cornerMenu.svg';

function Sidebar() : JSX.Element {
  return(
    <>
      <img src={cornerMenu} alt="menu"/>
      <SideBarWrapper>
        <Logo />
        <UserCard />
        <Separator />
        <SideBarButtons />
      </SideBarWrapper>
    </>
  );
}

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

  @media(min-width: 420px){
    height: 100vh;
    max-width: 210px;
  }
`;

export {};
export default Sidebar;