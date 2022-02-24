import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            onChange={ onInputChange }
            data-testid="name-input"
            id="name"
            type="text"
            value={ cardName }
            name="cardName"
          />
        </label>
        <label htmlFor="descricao">
          Descrição da carta:
          <textarea
            onChange={ onInputChange }
            data-testid="description-input"
            id="descricao"
            type="text"
            value={ cardDescription }
            name="cardDescription"
          />
        </label>
        <label htmlFor="atrib-1">
          1º Atributo:
          <input
            onChange={ onInputChange }
            data-testid="attr1-input"
            id="atrib-1"
            type="number"
            value={ cardAttr1 }
            name="cardAttr1"
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="atrib-2">
          2º Atributo:
          <input
            onChange={ onInputChange }
            data-testid="attr2-input"
            id="atrib-2"
            type="number"
            value={ cardAttr2 }
            name="cardAttr2"
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="atrib-3">
          3º Atributo:
          <input
            onChange={ onInputChange }
            data-testid="attr3-input"
            id="atrib-3"
            type="number"
            value={ cardAttr3 }
            name="cardAttr3"
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="url-img">
          URL da imagem:
          <input
            onChange={ onInputChange }
            data-testid="image-input"
            id="url-img"
            type="text"
            value={ cardImage }
            name="cardImage"
          />
        </label>
        <label htmlFor="raridade">
          Raridade da carta:
          <select
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
            id="raridade"
            value={ cardRare }
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro</option>
          </select>
        </label>
        <label htmlFor="sup-try">
          Super Trunfo:
          <input
            onChange={ onInputChange }
            data-testid="trunfo-input"
            id="sup-try"
            type="checkbox"
            checked={ cardTrunfo }
            name="cardTrunfo"
          />
        </label>
        <button
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImagestring: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfoum: PropTypes.bool,
}.isRequired;

export default Form;
