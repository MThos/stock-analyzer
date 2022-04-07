import React, {Component} from 'react';
import BasicDetailsItem from './BasicDetailsItem';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "$$$$",
      exchange: "$$$$",
      sector: "$$$$",
      fiscalEnd: "$$$$",
      latestQtr: "$$$$",
      dividendDate: "$$$$",
      dividendAmt: "$$$$",
      dividendYield: "$$$$",
      shares: "$$$$",
      mcap: "$$$$",
      eps: "$$$$",
      revenue: "$$$$",
      rps: "$$$$",
      ebitda: "$$$$",
      profitGross: "$$$$",
      profitMargin: "$$$$",
      volumeAvg: "$$$$",
      high52: "$$$$",
      low52: "$$$$",
      ma50: "$$$$",
      ma200: "$$$$",
      forwardPE: "$$$$",
      trailingPE: "$$$$",
      beta: "$$$$",      
    }
  }

  render() {
    return(
      <div id="details-flex">
        <div className="details-flex-column">
          <ul>
            <BasicDetailsItem keyword="Symbol" />
            <BasicDetailsItem keyword="Exchange" />
            <BasicDetailsItem keyword="Sector" />
            <BasicDetailsItem keyword="Fiscal End" />
            <BasicDetailsItem keyword="Latest Quarter" />
            <BasicDetailsItem keyword="Dividend Date" />
            <BasicDetailsItem keyword="Dividend Amount" />
            <BasicDetailsItem keyword="Dividend Yield" />
          </ul>
        </div>
        <div className="details-flex-column text-right">
          <ul>
            <BasicDetailsItem keyword={this.state.symbol} />
            <BasicDetailsItem keyword={this.state.exchange} />
            <BasicDetailsItem keyword={this.state.sector} />
            <BasicDetailsItem keyword={this.state.fiscalEnd} />
            <BasicDetailsItem keyword={this.state.latestQtr} />
            <BasicDetailsItem keyword={this.state.dividendDate} />
            <BasicDetailsItem keyword={this.state.dividendAmt} />
            <BasicDetailsItem keyword={this.state.dividendYield} />
          </ul>
        </div>
        <div className="details-flex-column">
          <ul>
            <BasicDetailsItem keyword="Shares" />
            <BasicDetailsItem keyword="Market Cap" />
            <BasicDetailsItem keyword="EPS" />
            <BasicDetailsItem keyword="Revenue" />
            <BasicDetailsItem keyword="RPS" />
            <BasicDetailsItem keyword="EBITDA" />
            <BasicDetailsItem keyword="Profit Gross" />
            <BasicDetailsItem keyword="Profit Margin" />
          </ul>
        </div>
        <div className="details-flex-column text-right">
          <ul>
            <BasicDetailsItem keyword={this.state.shares} />
            <BasicDetailsItem keyword={this.state.mcap} />
            <BasicDetailsItem keyword={this.state.eps} />
            <BasicDetailsItem keyword={this.state.revenue} />
            <BasicDetailsItem keyword={this.state.rps} />
            <BasicDetailsItem keyword={this.state.ebitda} />
            <BasicDetailsItem keyword={this.state.profitGross} />
            <BasicDetailsItem keyword={this.state.profitMargin} />
          </ul>
        </div>
        <div className="details-flex-column">
          <ul>
            <BasicDetailsItem keyword="Average Volume" />
            <BasicDetailsItem keyword="52W High" />
            <BasicDetailsItem keyword="52W Low" />
            <BasicDetailsItem keyword="50 Day MA" />
            <BasicDetailsItem keyword="200 Day MA" />
            <BasicDetailsItem keyword="Trailing PE" />
            <BasicDetailsItem keyword="Forward PE" />
            <BasicDetailsItem keyword="BETA" />
          </ul>
        </div>
        <div className="details-flex-column text-right">
          <ul>
            <BasicDetailsItem keyword={this.state.volumeAvg} />
            <BasicDetailsItem keyword={this.state.high52} />
            <BasicDetailsItem keyword={this.state.low52} />
            <BasicDetailsItem keyword={this.state.ma50} />
            <BasicDetailsItem keyword={this.state.ma200} />
            <BasicDetailsItem keyword={this.state.trailingPE} />
            <BasicDetailsItem keyword={this.state.forwardPE} />
            <BasicDetailsItem keyword={this.state.beta} />
          </ul>
        </div>
      </div> 
    );
  }
}

export default Details;