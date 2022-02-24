import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      filterName: '',
      filterRaridade: 'todas',
      filterST: false,
      filterDisable: false,
    };

    this.filter = this.filter.bind(this);
    this.disable = this.disable.bind(this);
  }

  filter({ target: { value, name, type, checked } }) {
    const typo = type === 'checkbox'
      ? checked
      : value;
    this.setState({ [name]: typo }, () => this.disable());
  }

  disable() {
    const { filterST } = this.state;
    return filterST === true
      ? this.setState({ filterDisable: true })
      : this.setState({ filterDisable: false });
  }

  render() {
    const { list, delet } = this.props;
    const { filterName, filterRaridade, filterDisable, filterST } = this.state;
    return (
      <div>
        <label htmlFor="filter-name">
          Filtrar nome:
          <input
            disabled={ filterDisable }
            name="filterName"
            onChange={ this.filter }
            id="filter-name"
            data-testid="name-filter"
            type="text"
          />
        </label>
        <label htmlFor="filter-raridade">
          Filtrar raridade:
          <select
            disabled={ filterDisable }
            name="filterRaridade"
            onChange={ this.filter }
            id="filter-raridade"
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="filter-sp-trunfo">
          Filtrar super trunfo:
          <input
            onChange={ this.filter }
            name="filterST"
            data-testid="trunfo-filter"
            id="filter-sp-trunfo"
            type="checkbox"
          />
        </label>
        {list.filter((objeto) => (filterST === true
          ? objeto.trunfo === filterST
          : objeto)).filter((objeto) => objeto.name.includes(filterName))
          .filter((objeto) => (filterRaridade === 'todas'
            ? objeto
            : objeto.rare === filterRaridade)).map((objeto) => (
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
