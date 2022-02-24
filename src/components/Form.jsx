import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <div className="input-group">
          <span className="input-group-text">Name:</span>
          <input
            className="form-control"
            onChange={ onInputChange }
            data-testid="name-input"
            id="name"
            type="text"
            value={ cardName }
            name="cardName"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Descrição da carta:</span>
          <textarea
            className="form-control"
            onChange={ onInputChange }
            data-testid="description-input"
            id="descricao"
            type="text"
            value={ cardDescription }
            name="cardDescription"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">1º Atributo:</span>
          <input
            className="form-control"
            onChange={ onInputChange }
            data-testid="attr1-input"
            id="atrib-1"
            type="number"
            value={ cardAttr1 }
            name="cardAttr1"
            min="0"
            max="90"
          />
          <span className="input-group-text">2º Atributo:</span>
          <input
            className="form-control"
            onChange={ onInputChange }
            data-testid="attr2-input"
            id="atrib-2"
            type="number"
            value={ cardAttr2 }
            name="cardAttr2"
            min="0"
            max="90"
          />
          <span className="input-group-text">3º Atributo:</span>
          <input
            className="form-control"
            onChange={ onInputChange }
            data-testid="attr3-input"
            id="atrib-3"
            type="number"
            value={ cardAttr3 }
            name="cardAttr3"
            min="0"
            max="90"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">URL da imagem:</span>
          <input
            className="form-control"
            onChange={ onInputChange }
            data-testid="image-input"
            id="url-img"
            type="text"
            value={ cardImage }
            name="cardImage"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Raridade da carta:</span>
          <select
            className="form-select"
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
        </div>
        {hasTrunfo === true
          ? <p> Você já tem um Super Trunfo em seu baralho </p>
          : (
            <label htmlFor="sup-try">
              Super Trunfo
              <input
                className="form-check-input"
                onChange={ onInputChange }
                data-testid="trunfo-input"
                id="sup-try"
                type="checkbox"
                checked={ cardTrunfo }
                name="cardTrunfo"
              />
            </label>)}
        <div>
          <button
            className="btn btn-outline-success"
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </div>
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
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Form;
