import styled from 'styled-components';

export const CardSearchStyle = styled.div`
 display: flex;
 flex-direction: column;
 width: auto;
 justify-content:start;
 align-items: center;
 
 * {
    transition: all 0.3s ease-in-out;
 }


  .card-search__panel {
    display: flex;
    flex-direction: column;

    * {
      margin: 1rem;
    }

    input, select {
        padding: 0.8rem;
        font-size: 1rem;
        border: 2px solid hsl(15, 100%, 50%);
        border-radius: 5px;
    }
  }

  .card-search__title {
    color: var(--clear);
    font-size: 1.5rem;
    width: 100%;
    margin: 1rem 0 0 0;
  }

  .card-search__search {
    display: flex;
    flex-direction: column;
  }

 .card-search__lister {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;    
    gap: 1rem;
    max-width: 80%;
 }

 .card-search__card {
  height: 180px;
  width: 132px;

  .card-search__imagewrapper {
    height: 100%;
    background: hsla(0, 0%, 100%, 0.1);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.8) rotate3d(1, 1, 1, -10deg);
      cursor: pointer;
      box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.8);
    }
  }

  img {
    height: 100%;
    
    &:hover {
      
    }
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 768px) {
    .card-search__search {
      flex-direction: column !important;

      & > * {
        margin: 0;
      }
    }
    .card-search__card {
      height: 180px;
      width: 100%;
    }    
    .card-search__imagewrapper {
      width: 100%;
    }
    .card-search__lister {
      margin: 0 auto;
      width: 100%;
    }
  }
 }
`;
