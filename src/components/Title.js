import React, {Component} from 'react';

class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="main-title">
        {this.props.title.toUpperCase()}
      </div>
    );
  }
}

export default Title;