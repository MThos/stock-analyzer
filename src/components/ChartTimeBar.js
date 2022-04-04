import React, {Component} from 'react';

class ChartTimeBar extends Component {
  constructor() {
    super();
    this.state = {
      active: "intraday"
    }
  }

  onClick = (e) => {
    this.setState({active: e.target.id})
  }

  render() {
    let active = this.state.active;

    return(
      <div id="chart-time">
        <ul>
          <li><a id="intraday" className={active === "intraday" ? 'chart-time-active' : 'chart-time-link'} onClick={e => this.onClick(e)}>Intraday</a></li>
          <li><a id="daily" className={active === "daily" ? 'chart-time-active' : 'chart-time-link'} onClick={e => this.onClick(e)}>Daily</a></li>
          <li><a id="weekly" className={active === "weekly" ? 'chart-time-active' : 'chart-time-link'} onClick={e => this.onClick(e)}>Weekly</a></li>
          <li><a id="monthly" className={active === "monthly" ? 'chart-time-active' : 'chart-time-link'} onClick={e => this.onClick(e)}>Monthly</a></li>
        </ul>
      </div>
    );
  }
}

export default ChartTimeBar;