import styled from 'styled-components';
import iconSearch from '../img/iconSearch.svg';

function Searchbar() : JSX.Element {
    return(
      <SearchBarWrapper>
        <div>
          <img src={iconSearch} alt="pesquisa"></img>
          <input className="search-input" type="text" />
        </div>
      </SearchBarWrapper>
    );
  }
  const SearchBarWrapper = styled.div`
    display: flex;
    height: 11%;
    justify-content: bottom;
    margin-top: -1vh;
  
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 60%;
      padding: 0 3vw;
      width: 100%;
      max-width: 650px;
      border-radius: 3px;
      background-color: #DDD;
    }
    & > div > img {
      width: 20%;
      height: 90%;
    }
    & > div > .search-input {
      width: 80%;
      height: 65%;
      color: rgba(0, 0, 0, 1);
      font-size: 15px;
    }

    @media(min-width: 600px) {
      margin-top: 9vh;
    }
  `;

export {};
export default Searchbar;