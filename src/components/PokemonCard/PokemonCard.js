import React, { useState, useEffect } from 'react';
import api_pokemon from "../../utils/api_pokemon";
import { PokemonCardStyle } from './PokemonCard.style';



const PokemonCard = ({
  cardId,
  onDeleteButtonClick,
  count,
}) => {
  // async getCardData(cardId) {
  //   return pokemonApiFetch(https://api.pokemontcg.io/v2/cards/${cardId}, getOptions());
  // },

  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    api_pokemon.getCardsData(cardId)
    .then(cardData => {setCardData(cardData)})
  }, [cardId]);

  return (
    <PokemonCardStyle>
      <div className='pokemon-card-style__card-wrapper'>
        <div className='pokemon-card-style__block-top'>
          <h1 className='pokemon-card-style__name'>{cardData?.name}</h1>
          <button className='pokemon-card-style__button-delete' onClick={onDeleteButtonClick}>X</button>
          <h1 className='pokemon-card-style__counter'>{count > 1 && 'x'+count }</h1>
        </div>
        <div className='pokemon-card-style__block-middle'>
          <span><strong>STATS</strong></span>
          <span>{cardData?.subtypes}</span>
          <span>{cardData?.hp}hp</span>
          <span>{cardData?.types}</span>
          <span>{cardData?.evolvesFrom && 'from '+cardData?.evolvesFrom}</span>
          <span>{cardData?.cardmarket.prices.averageSellPrice}$</span>
        </div>    
        <div className='pokemon-card-style__block-bottom'>
          <img className='pokemon-card-style__image' src={cardData?.images.small} alt={cardData?.id} />
          <img className='pokemon-card-style__badge' src={cardData?.set.images.symbol} alt={cardData?.set.series} />
        </div>  
      </div>      
    </PokemonCardStyle>
  )
}

export default PokemonCard;