import React, { useMemo } from 'react';

import { DeckContainerStyle } from './DeckContainer.style.js';
import PokemonCard from '../PokemonCard/PokemonCard.js';

const DeckList = ({deck, handleChangeDeckName, handleDeleteCardFromDeck}) => {

  const groupedCards = useMemo(() => {
    const groupedCardsAsObject = (deck?.cards || [])
      .reduce((acc, cardId) => {
        return {
          ...acc,
          [cardId]: (acc[cardId] || 0) + 1
        }
      }, {});
    return Object.entries(groupedCardsAsObject).map(([cardId, count]) => ({
      cardId,
      count
    }));
  }, [deck?.cards]);

  return (
    <DeckContainerStyle>
      <input
        className='deck-container__name-input'
        name={deck?.id}
        type='text'
        value={deck?.name || ''}
        onChange={e => handleChangeDeckName(e.target.value)}
      />
      {/* <h2>{deck?.name}</h2> */}
      <div className='deck-container__elements'>
        {groupedCards?.map((card, cardIndex) => (
          <PokemonCard
            key={card.cardId}
            cardId={card.cardId}
            count={card.count}
            onDeleteButtonClick={() => handleDeleteCardFromDeck(card.cardId, deck.id)}
          />
        ))}
      </div>
    </DeckContainerStyle>
  );
};

export default DeckList;