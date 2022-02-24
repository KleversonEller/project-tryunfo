import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((objeto) => (<Card
          key={ objeto.name }
          cardName={ objeto.name }
          cardDescription={ objeto.description }
          cardAttr1={ objeto.attr1 }
          cardAttr2={ objeto.attr2 }
          cardAttr3={ objeto.attr3 }
          cardImage={ objeto.image }
          cardRare={ objeto.rare }
          cardTrunfo={ objeto.trunfo }
        />))}
      </div>
    );
  }
}

CardList.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  attr1: PropTypes.string,
  attr2: PropTypes.string,
  attr3: PropTypes.string,
  image: PropTypes.string,
  rare: PropTypes.string,
  trunfo: PropTypes.bool,
}.isRequired;

export default CardList;
