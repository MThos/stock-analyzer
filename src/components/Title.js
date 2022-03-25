import React, {Component} from 'react';
import TextInput from './TextInput';

class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="header">
        <div className="main-title">{this.props.title}</div>
        <TextInput placeholder="Symbol" />
      </div>
    );
  }
}

export default Title;