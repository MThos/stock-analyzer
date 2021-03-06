import React, {Component} from 'react';

class TextInput extends Component {
  constructor() {
    super();
  }  

  render() {
    return(
        <input
          id="text-input"
          type="text"
          placeholder={this.props.placeholder}
          onKeyPress={e => this.props.handleKeyPress(e)}
        />
    );
  }
}

export default TextInput;