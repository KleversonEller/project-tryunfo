import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      filterName: '',
    };

    this.filter = this.filter.bind(this);
  }

  filter({ target: { value } }) {
    this.setState({ filterName: value });
  }

  render() {
    const { list, delet } = this.props;
    const { filterName } = this.state;
    return (
      <div>
        <label htmlFor="filter-name">
          Procurar carta:
          <input
            onChange={ this.filter }
            id="filter-name"
            data-testid="name-filter"
            type="text"
          />
        </label>
        {list.filter((objeto) => objeto.name.includes(filterName)).map((objeto) => (
          (
            <div key={ objeto.name }>
              <Card
                cardName={ objeto.name }
                cardDescription={ objeto.description }
                cardAttr1={ objeto.attr1 }
                cardAttr2={ objeto.attr2 }
                cardAttr3={ objeto.attr3 }
                cardImage={ objeto.image }
                cardRare={ objeto.rare }
                cardTrunfo={ objeto.trunfo }
              />
              <button
                onClick={ delet }
                type="button"
                data-testid="delete-button"
                name={ objeto.name }
              >
                Excluir
              </button>
            </div>)
        ))}
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
