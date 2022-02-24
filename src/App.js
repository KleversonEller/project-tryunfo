import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveBtn = this.saveBtn.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);
    this.delet = this.delet.bind(this);
  }

  onInputChange(event) {
    const typo = (event.target.type === 'checkbox')
      ? event.target.checked
      : event.target.value;
    this.setState({
      [event.target.name]: typo,
    }, () => this.saveBtn());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { state } = this;
    const card = {
      name: state.cardName,
      description: state.cardDescription,
      attr1: state.cardAttr1,
      attr2: state.cardAttr2,
      attr3: state.cardAttr3,
      image: state.cardImage,
      rare: state.cardRare,
      trunfo: state.cardTrunfo,
    };
    this.setState((deckAtual) => ({
      deck: [...deckAtual.deck, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  saveBtn() {
    const { state } = this;
    const soma = parseInt(state.cardAttr1, 10) + parseInt(state.cardAttr2, 10)
    + parseInt(state.cardAttr3, 10);
    const max = 90;
    const result = 210;
    if (
      state.cardDescription !== ''
    && state.cardImage !== ''
    && state.cardName !== ''
    && parseInt(state.cardAttr1, 10) >= 0
    && parseInt(state.cardAttr2, 10) >= 0
    && parseInt(state.cardAttr3, 10) >= 0
    && parseInt(state.cardAttr1, 10) <= max
    && parseInt(state.cardAttr2, 10) <= max
    && parseInt(state.cardAttr3, 10) <= max
    && soma <= result
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  hasTrunfo() {
    const { state } = this;
    return state.deck.some(({ trunfo }) => trunfo === true);
  }

  delet(event) {
    const { deck } = this.state;
    this.setState({ deck: deck.filter(({ name }) => name !== event.target.name) });
  }

  render() {
    const { state } = this;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div>
          <Form
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            hasTrunfo={ this.hasTrunfo() }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
          />
          <CardList list={ state.deck } delet={ this.delet } />
        </div>
      </>
    );
  }
}

export default App;
