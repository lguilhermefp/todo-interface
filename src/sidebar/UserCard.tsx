import avatar from '../img/avatar.svg';
import styled from 'styled-components';

function UserCard() : JSX.Element {
    return(
      <UserWrapper>
          <Avatar src={avatar} alt="avatar" />
        <UserNameAndFunctionWrapper>
          <UserName>Nome</UserName>
          <UserFunction>Função</UserFunction>
        </UserNameAndFunctionWrapper>
      </UserWrapper>
    );
}

const UserWrapper : any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  margin: 0 7.5%;
  height: 7vh;
  margin-top: 5vh;
  background-color: #333;
  padding: 5%;
  border-radius: 3px;
`;
const Avatar : any = styled.img`
  height: 35px;
  width: 35px;
  object-fit: cover;
  padding: 0 3%;
`;
const UserNameAndFunctionWrapper : any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4%;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
const UserName : any = styled.h3`
  height: 40%;
  font-size: 17px;
  color: white;
  margin: 0 0 1vh 0;
`;
const UserFunction : any = styled.h4`
  height: 50%;
  font-size: 16px;
  color: #C9C9C9;
  margin: 0;
`;

export default UserCard;