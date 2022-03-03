import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, clase } = this.props;
    return (
      <section className={ clase }>
        <div className="container">
          <p data-testid="attr1-card">
            {`AG ${cardAttr1}`}
          </p>
          <p className="card-name" data-testid="name-card">
            {cardName}
          </p>
        </div>
        <img
          className="imagem"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p className="descricao" data-testid="description-card">
          {cardDescription}
        </p>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        {cardTrunfo === true && <p data-testid="trunfo-card"> Super Trunfo </p>}
        <div className="container atributos">
          <p data-testid="attr2-card">
            {`AT ${cardAttr2}`}
          </p>
          <p data-testid="attr3-card">
            {`DF ${cardAttr3}`}
          </p>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImagestring: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfoum: PropTypes.bool,
}.isRequired;

export default Card;
