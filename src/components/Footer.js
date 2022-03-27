import React, {Component} from 'react';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li>Copyright &#169; {new Date().getFullYear()}</li>
        <li><a href="#">Contact</a></li>
      </ul>
    );
  }
}

export default Footer;