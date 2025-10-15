import React from 'react';
import { Link } from 'react-router-dom';

function StoneCard({ id, name, image, description }) {
  // Função para limitar o tamanho da descrição no card
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Link to={`/collection/${id}`} className="material-card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        {/* Exibe a descrição truncada */}
        <p>{truncateText(description, 100)}</p>
      </div>
    </Link>
  );
}

export default StoneCard;
