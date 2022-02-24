import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveBtn = this.saveBtn.bind(this);
  }

  onInputChange(event) {
    const typo = (event.target.type === 'checkbox')
      ? event.target.checked
      : event.target.value;
    this.setState({
      [event.target.name]: typo,
    }, () => this.saveBtn());
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
            // hasTrunfo={}
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            // onSaveButtonClick={ }
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
        </div>
      </>
    );
  }
}

export default App;
