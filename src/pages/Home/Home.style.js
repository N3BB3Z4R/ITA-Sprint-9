import styled from "styled-components";

export const HomeStyle = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .App {
    text-align: center;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  // .App-header {
  //   background-color: #282c34;
  //   min-height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   font-size: calc(10px + 2vmin);
  //   color: white;
  // }

  // .App-link {
  //   color: #61dafb;
  // }

  .header__login--button {
    text-decoration: none;
    color: #aaa;

    &:hover {
    color: var(--clear);
    border-bottom: 1px solid #0044ff;
    padding-bottom: 0.3rem;
    }
  }
`;