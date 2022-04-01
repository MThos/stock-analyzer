import React, {Component} from 'react';
import Title from './Title';
import TextInput from './TextInput';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    let symbol = (this.props.symbol.length === 0) ? "Stock Analyzer" : this.props.symbol;

    return(
      <header>
        <Title title={symbol} />
        <TextInput placeholder="Symbol" handleKeyPress={this.props.handleKeyPress} />
      </header>
    );
  }
}

export default Header;