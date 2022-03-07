import React, { useContext, useEffect } from 'react';

import { DecksListStyle } from './DecksList.style';

import * as decks_manager from '../../utils/decks_manager';
import { AuthenticationContext } from '../../App';


const DecksList = ({selectedDeckId, setSelectedDeckId, decks, setDecks, handleAddNewDeck, handleDeleteDeck}) => {

  const autenticationContext = useContext(AuthenticationContext);

  useEffect(() => { 
    setDecks([...decks_manager.getDecks(autenticationContext.user)])
    console.table(decks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

  }, [selectedDeckId]);

  const handleSelectedDeck = (deckName, deckId) => {
    // TO-DO get clicked Deck and open in DeckList component
    // setSelectedDeck(e.target.dataset.id);
    console.log('deckId', deckId)
    setSelectedDeckId(deckId);
    console.log('handleOpenDeck', deckName, selectedDeckId);
  }

  return (
    <DecksListStyle>
      {/* <h2>My Decks</h2> */}
      <div className='deckslist__lister'>
        <div
          className='deckslist__button-add-deck'
          onClick={() => handleAddNewDeck()}
        >
          <span>+</span>
        </div>
        {decks?.map(deck => (
          <div
            // className='decklist__button-deck'
            className={[
              'deckslist__button-deck',
              selectedDeckId === deck.id ? 'deckslist__button-deck--selected' : ''
            ].join(' ')}
            onClick={() => handleSelectedDeck(deck.name, deck.id)}
            key={deck.id}
          >
            <button className='deckslist__button-delete' onClick={() => handleDeleteDeck(deck.id)}>X</button>
            <div className='deckslist__deck-name'>'{deck.name}'</div>
            <div className='deckslist__deck-length'>{deck.cards.length} cards</div>
          </div>
        ))}
      </div>
    </DecksListStyle>
  );
}

export default DecksList;