import React, {Component} from 'react';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    let active = this.props.active;

    return (
      <footer>
        <ul>
          <li><a id="privacy" className={active === "privacy" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Privacy Policy</a></li>
          <li><a id="terms" className={active === "terms" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Terms and Conditions</a></li>
          <li><a id="cookies" className={active === "cookies" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Cookies</a></li>
          <li>Copyright &#169; {new Date().getFullYear()}</li>
          <li><a id="contact" className={active === "contact" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Contact</a></li>
        </ul>
      </footer>      
    );
  }
}

export default Footer;