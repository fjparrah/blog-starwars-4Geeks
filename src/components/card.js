import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SwapiCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const getCharacterImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  return (
    <div className="container">
      <div className="row">
        {characters.slice(0, 9).map((character, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3" style={{ width: '50%', height: '50%' }}>
              <img
                src={getCharacterImage(index + 1)}
                className="card-img-top"
                alt={`Character ${index + 1}`}
                style={{ width: '100%', height: '100%' }} // Ajustar imagen al 100% del ancho
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Height: {character.height}</p>
                <p className="card-text">Gender: {character.gender}</p>
                {/* Agregar más detalles si es necesario */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapiCharacters;



