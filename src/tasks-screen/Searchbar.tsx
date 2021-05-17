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
    margin-top: 9vh;
    height: 14vh;
    justify-content: bottom;
  
    & > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50%;
    width: 100%;
    border-radius: 3px;
    background-color: #000;
    opacity: 0.12;
    }
    & > div > img {
      width: 30%;
    }
    & > div > .search-input {
      width: 70%;
    }
  `;

  export default Searchbar;