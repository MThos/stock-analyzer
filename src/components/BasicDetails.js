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
            <BasicDetailsItem keyword="Open" />
            <BasicDetailsItem keyword="Close" />
            <BasicDetailsItem keyword="High" />
            <BasicDetailsItem keyword="Low" />
          </ul>
        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword={this.state.open} />
            <BasicDetailsItem keyword={this.state.close} />
            <BasicDetailsItem keyword={this.state.high} />
            <BasicDetailsItem keyword={this.state.low} />
          </ul>
        </div>
        <div className="flex-spacer">

        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword="Shares" />
            <BasicDetailsItem keyword="EPS" />
            <BasicDetailsItem keyword="Revenue" />
            <BasicDetailsItem keyword="EBITDA" />
          </ul>
        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword={this.state.shares} />
            <BasicDetailsItem keyword={this.state.eps} />
            <BasicDetailsItem keyword={this.state.revenue} />
            <BasicDetailsItem keyword={this.state.ebitda} />
          </ul>
        </div>
        <div className="flex-spacer">
          
        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword="52W High" />
            <BasicDetailsItem keyword="52W Low" />
            <BasicDetailsItem keyword="Market Cap" />
            <BasicDetailsItem keyword="Volume" />
          </ul>
        </div>
        <div className="flex-column">
          <ul>
            <BasicDetailsItem keyword={this.state.high52} />
            <BasicDetailsItem keyword={this.state.low52} />
            <BasicDetailsItem keyword={this.state.mcap} />
            <BasicDetailsItem keyword={this.state.volume} />
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicDetails;