import React, {Component} from 'react';
import BasicDetailsItem from './BasicDetailsItem';

class BasicDetails extends Component {
  constructor() {
    super();
    this.state = {
      open: "$105",
      close: "$109",
      high: "$111",
      low: "$105",
      shares: "86M",
      eps: "$1.23",
      revenue: "$211B",
      ebitda: "$78B",
      high52: "$122",
      low52: "$94",
      mcap: "$1.4B",
      volume: "2.2M"
    }
  }

  render() {
    return(
      <div id="basic-details">
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword="Open" value={this.state.open} />
            <BasicDetailsItem keyword="Close" value={this.state.close} />
            <BasicDetailsItem keyword="High" value={this.state.high} />
            <BasicDetailsItem keyword="Low" value={this.state.low} />
          </ul>
        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword="Shares" value={this.state.shares} />
            <BasicDetailsItem keyword="EPS" value={this.state.eps} />
            <BasicDetailsItem keyword="Revenue" value={this.state.revenue} />
            <BasicDetailsItem keyword="EBITDA" value={this.state.ebitda} />
          </ul>
        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword="52W High" value={this.state.high52} />
            <BasicDetailsItem keyword="52W Low" value={this.state.low52} />
            <BasicDetailsItem keyword="Market Cap" value={this.state.mcap} />
            <BasicDetailsItem keyword="Volume" value={this.state.volume} />
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicDetails;