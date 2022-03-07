import styled from 'styled-components';

export const HeaderStyle = styled.div`
  background-color: var(--dark);

  // display: flex;
  // flex-direction:row;
  // justify-content: center;
  // align-items: center;

  // & ul {
  //   list-style: none;

  //   & li {
  //     padding: 2rem;
  //   }
  // }
  margin-bottom: 0rem;

  .header__bottom,
  .header__top {
    width: 100%;
    display: flex;
  }
  .header__bottom {
    display: flex;
    justify-content: center;
    /* border-top: 1px solid #333; */
    border-bottom: 1px solid #333;

    .header__menu {
      display: flex;
    }
  }
  .header__link {
    padding: 0.7rem 1.7rem;
    color: #888;
    font-weight: bold;
    text-decoration: none;
    /* border-left: 1px solid #333;
    border-right: 1px solid #333; */

    &:hover {
      background-color: var(--dark);
      color: var(--clear);
    }

    &.header__link--selected {
      border-bottom: 6px solid var(--blue);
      color: var(--clear);
      text-decoration: none;
    }
  }

  .header__top {
    justify-content: center;
    cursor: default;
  }

  /* @font-face {
    font-family: pokemon;
    src: url("../../fonts/pokemonsolid.ttf");
  } */
  @font-face {
    font-family: "Pokemon";
    src: url("../../fonts/pokemonsolid.eot?") format("eot"),
      url("../../fonts/pokemonsolid.woff") format("woff"),
      url("../../fonts/pokemonsolid.ttf") format("truetype"),
      url("../../fonts/pokemonsolid.svg#PokemonSolidNormal") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  .header__title {
    font-family: "Pokemon";
    font-size: 2.5rem;
    /* line-height: 0.79; */
    letter-spacing: 0.3rem;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    padding: 0rem 0;
    margin: 1.8rem 0;
    color: whitesmoke;
    line-height: 1.2rem;
  }

  .header__subtitle {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
  }

  .header__login {
    /* position:absolute;
    top: 45px;
    right: 25px; */
    margin: 0 1rem;
    display: flex;
    justify-content: end;
    align-items: center;
    color: #222;
    cursor: default;

    .header__login--button:hover {
      color: var(--clear);
      border-bottom: 1px solid #0044ff;
      padding-bottom: 0.3rem;
    }

    button {
      background: #070707;
      color: #777;
      border: 1px solid #333;
      padding: 8px;
      margin: 0rem;
      width: 200px;
      border-radius: 0.4rem;

      &:hover {
        background: #777;
        color: var(--clear);
        cursor: pointer;
      }
    }

    & > * {
      color: #888;
      text-decoration: none;
      padding: 0 0.5rem;
    }
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 768px) {
    .header__title {
      font-size: 1.4em;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .header__bottom {
      flex-direction: column;
      align-items: center;
    }
    .header__login {
      margin: 1rem 0;
    }
  }
`;