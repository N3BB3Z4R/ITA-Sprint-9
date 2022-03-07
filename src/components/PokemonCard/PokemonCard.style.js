import styled from "styled-components";

export const PokemonCardStyle = styled.div`
  /* border: 1px solid white; */
  background-color: var(--blue);
  border-radius: 10px;
  padding: 1rem;
  width: auto;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    border-radius: 8px;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: linear-gradient(rgba(255,255,255,0.3), rgba(55,55,55,0.5));
    z-index: 1;
  }

  & * {
    cursor: default;
    z-index: 2;
  }

  .pokemon-card-style__card-wrapper {
    height: 220px;
  }

  .pokemon-card-style__block-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1rem;
  }

  .pokemon-card-style__name {
    margin:  0;
    padding: 0;
  }

  .pokemon-card-style__counter {
    position: absolute;
    top: 1rem;
    right: 1rem;
    margin:  0;
    padding: 0;
    /* position: absolute;
    top: 1rem;
    right: 1rem; */
  }

  .pokemon-card-style__button-delete {
    position: relative;
    right: -1.3rem;
    bottom: 1.3rem;
    background-color: red;
    border: none;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.3rem 0.4rem;
    border-radius: 10px;
    height: 1.4rem;
    z-index: 10;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }

  .pokemon-card-style__block-middle {
    position: absolute;
    width: 25%;
    right: 0.8rem;
    display: flex;
    flex-direction: column;
    font-size: 0.65rem;

    &:after {
      content: '';
      position: absolute;
      border-radius: 10px;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: 100%;
      background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.15));
    }

    span {
      margin: 0.3rem 0;
    }
  }

  .pokemon-card-style__block-bottom {
    display: flex;
    justify-content: space-between;
  }

  .pokemon-card-style__image {
    width: 8rem;
    border-radius: 10px;
    position: relative;
    z-index: 10;

    &:hover {
      transform: scale(1.7) translateY(30px) translateX(20px);
      z-index: 12;
      box-shadow: 0 0 10px rgba(0,0,0,0.9);
    }
  }

  .pokemon-card-style__badge {
    position: absolute;
    height: 30px;
    z-index: 11;
    aspect-ratio: 1/1;
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 70px;
    height: 80px;
    font-size: 0.6rem;
    padding: 0;
    margin: 0;
    

    .pokemon-card-style__image {
      width: 3rem;
      height: 60px;

      &:hover {
        z-index: 300;
        transform: scale(2.7) translateY(10px) translateX(7px);
      }
    }
    .pokemon-card-style__block-middle {
      display: none;

    }
    .pokemon-card-style__block-bottom {
      margin:0;
      padding: 0;
      position: absolute;
      top:0.95rem;
      left: 0.3rem;
    }
    .pokemon-card-style__name {
      font-size: 0.6rem;
      padding-left: 0.5rem;
    }
    .pokemon-card-style__button-delete {
      position: relative;
      right: -0.4rem;
      bottom: 0.3rem;
    }
    .pokemon-card-style__counter {
      position: absolute;
      top: 4.1rem;
      right: -0.3rem;
      z-index:10;
    }
  }

`;