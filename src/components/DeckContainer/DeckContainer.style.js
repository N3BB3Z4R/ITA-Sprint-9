import styled from "styled-components";

export const DeckContainerStyle = styled.div`
 display: flex;
 flex-direction: column;
 width: auto;
 align-items: flex-start;
 /* border-left: 2px solid #333; */
 padding: 1rem;
 
 * {
    transition: all 0.3s ease-in-out;
 }

 .deck-container__name-input {
    border: 1px solid rgba(0,0,0,0);
    background-color: rgba(0,0,0,0);
    color: var(--clear);
    font-size: 1rem;
    font-weight: bold;
    width: auto;
    text-overflow: ellipsis;
    margin: 0 0 1rem 0;
    border-bottom: 1px solid var(--clear);
    padding: 0.5rem;
   
    &:hover {
      border: 1px solid var(--clear);
      border-radius: 15px;
    }

 }

 .deck-container__elements {
   width: 92%;
   display: flex;
   flex-direction: column-reverse;
   gap: 1rem;
 }

 /* MEDIA QUERIES */
 @media screen and (max-width: 768px) {
    padding: 1rem 0;
    border-bottom: 1px dashed #333;

    .deck-container__name-input {
      width: 85%;
      margin: 1rem auto;
    }
    .deck-container__elements {
      flex-direction: row-reverse;
      flex-wrap: wrap;
      margin: 0 auto;
      gap: 1.0rem;
      justify-content: center;
    }
 }
`;