import styled from 'styled-components';

function Separator() : JSX.Element {
    return <BarSeparator></BarSeparator>;
}

const BarSeparator : any = styled.div`
  background-color: white;
  width: 80%;
  margin: 10%;
  height: 1px;
`;

export default Separator;