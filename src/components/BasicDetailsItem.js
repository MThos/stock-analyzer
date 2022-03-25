import React, {Component} from 'react';

class BasicDetailsItem extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <li className="basic-details-item">
        {this.props.keyword} : {this.props.value}
      </li>
    );
  }
}

export default BasicDetailsItem;