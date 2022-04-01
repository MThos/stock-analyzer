import React, {Component} from 'react';

class BasicDetailsItem extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <li className="basic-details-item">
        {this.props.keyword}
      </li>
    );
  }
}

export default BasicDetailsItem;