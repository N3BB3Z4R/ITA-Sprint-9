import styled from "styled-components";

export const MyDecksContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-color: var(--dark);
  color: var(--clear);

  & .MyDecks__EditorContainer {
    display: flex;
    flex-direction: row;
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 768px) {

    .MyDecks__EditorContainer {
      flex-direction: column;
      width: 100vw;
    }
  }
`;

