import styled from 'styled-components';
import SideBar from './sidebar/Sidebar';

function HomeScreen() : JSX.Element {
  return(
  <AppWrapper>
    <SideBar />
  </AppWrapper>
  );
}
const AppWrapper : any = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;

  * {
    font-family: Roboto, sans-serif;
  }
`;

export default HomeScreen;