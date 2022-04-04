import React, {Component} from 'react';

class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="main-title">
        {this.props.title}
      </div>
    );
  }
}

export default Title;