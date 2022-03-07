import React, { useState, useEffect } from 'react';

import useDataToSearch from "../../hooks/useApiPokemon";
import { CardSearchStyle } from './CardSearch.style.js';

const CardSearch = ({selectedDeckId, handleAddCardToDeck}) => {
  
  const {cards, handleOnChange} = useDataToSearch();
  const [selectedOption, setSelectedOption] = useState('all');

  // useEffect(() => {
  //   console.log('selectedOption Init', selectedOption);
  // }, [])

  const handleTypeOnChange = (e) => {
    setSelectedOption(e.target.value);
    handleOnChange(e, selectedOption);
  }

  return (
    <CardSearchStyle>
      <div className='card-search__panel'>
        <h2 className='card-search__title'>Pokemon Card Search</h2>
        <div className='card-search__search'>
          <input
            type="text"
            name='cardName'
            placeholder="Search for a Pokemon"
            onChange={(e) => handleOnChange(e)}
          />
          <select name="types" value={selectedOption} onChange={e => handleTypeOnChange(e)}>
            <option value="">All</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Metal">Metal</option>
            <option value="Grass">Grass</option>
            <option value="Psychic">Psychic</option>
            <option value="Fighting">Fighting</option>
            <option value="Dragon">Dragon</option>
            <option value="Fairy">Fairy</option>
          </select>
        </div>        
      </div>
      <div className='card-search__lister'>
        {cards && cards.map(card => (
          <div
            onClick={() => handleAddCardToDeck(card.id, selectedDeckId)}
            className='card-search__card' key={card.id}
          >
            <div className='card-search__imagewrapper'>
              <img src={card.images.small} alt={card.name} />
            </div>
          </div>
        ))}
      </div>        
    </CardSearchStyle>
  );
}

export default CardSearch;