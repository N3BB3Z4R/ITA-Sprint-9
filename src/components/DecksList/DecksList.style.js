import styled from 'styled-components';

export const DecksListStyle = styled.div`

  border-bottom: 1px dashed #333;
  background-color: var(--dark);
  color: var(--clear);
  width: 100%;
  position: relative;

  .deckslist__button-deck {
    cursor: pointer;
    text-orientation: sideways;
    text-align: center;
    width: 8rem;
    border: 2px solid var(--clear);
    border-radius: 20px;
  }

  .deckslist__button-add-deck {
    cursor: pointer;
    font-size: 8rem;
    line-height: 0.4;
    text-orientation: sideways;
    width: 8rem;
    border: 2px solid var(--red);
    border-radius: 20px;
    background-color:var(--red);
    box-shadow: inset 0 0 1rem 15px hsla(15, 100%, 70%, 0.3);
    position: relative;

    &:after{
      content: '';
      position: absolute;
      border-radius: 15px;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: 50%;
      background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    }

    span {
      height: 3rem;
    }
  }

  .deckslist__button-deck, .deckslist__button-add-deck {
    height: 5rem;
    padding: 0.5rem;

    &:hover {
      background-color: lavender;
      transform: scale(1.1);
      color: var(--red);
    }
  }

  .deckslist__button-deck--selected {
    background-color: var(--green);
    border: 2px solid var(--green);
    box-shadow: inset 0 0 1rem 15px hsla(130, 100%, 70%, 0.3);
    color: var(--clear);

    &:after{
      content: '';
      position: absolute;
      border-radius: 15px;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: 50%;
      background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    }

    animation: 3s bounce infinite cubic-bezier(0.280, 0.840, 0.420, 1);

    @keyframes bounce {
        /* 0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-20px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); } */
        76%   { transform: scale(1,1)      translateY(0); }
        80%  { transform: scale(1.1,.9)   translateY(0); }
        86%  { transform: scale(.9,1.1)   translateY(-20px); }
        92%  { transform: scale(1.05,.95) translateY(0); }
        94%  { transform: scale(1,1)      translateY(-7px); }
        96%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
    
    &:hover {
      animation: none;
      transition: all 0.3s ease-in-out;
    }

    
  }

  .deckslist__button-delete {
    background-color: red;
    border: none;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.3rem 0.4rem;
    border-radius: 10px;
    height: 1.4rem;
    position: relative;
    top: -1rem;
    right: -4.2rem;
    z-index: 10;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }

  .deckslist__deck-name {
    position: relative;
    top: -1rem;
    font-size: 1rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .deckslist__deck-length {
    position: relative;
    font-size: 0.9rem;
    top:-0.5rem;
  }

  * {
    transition: all 0.2s ease-in-out;
  }

  .deckslist__lister {
    display: flex;
    flex-wrap: wrap;
    padding: 0 2rem;
    justify-content: start;
    margin: 1.5rem 0;
    gap: 1rem;
    overflow-wrap: scroll;
    
    div {
      h4 {
        text-align: center;
        text-overflow: clip;
      }
    }
  }
  p {
    text-align: center;
    width: 100%;
    font-size: 1rem;
    margin:0;
  }

 /* MEDIA QUERIES */
 @media screen and (max-width: 768px) {
   border-bottom: 1px dashed #333;
  .deckslist__lister {
    padding: 0 0.2rem;
    justify-content: center;
  }
 }
`;