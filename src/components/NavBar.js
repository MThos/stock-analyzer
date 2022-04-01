import React, {Component} from 'react';

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    let active = this.props.active;

    return(
      <div id="navbar">
        <ul>
          <li><a id="charts" href="#" className={active === "charts" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Charts</a></li>
          <li><a id="details" href="#" className={active === "details" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Details</a></li>
          <li><a id="financials" href="#" className={active === "financials" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Financials</a></li>
          <li><a id="analysis" href="#" className={active === "analysis" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Analysis</a></li>
          <li><a id="company" href="#" className={active === "company" ? 'nav-active' : 'nav-link'} onClick={e => this.props.onClick(e)}>Company</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;