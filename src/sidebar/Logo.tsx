import logo from '../img/logo.svg';
import styled from 'styled-components';

function Logo() : JSX.Element {
    return(
      <LogoIcon src={logo} alt="WLS Soluções" />
    );
}

const LogoIcon = styled.img`
  display: flex;
  width: 75%;
  min-width: 190px;
  margin-top: 4vh;
`;

export default Logo;