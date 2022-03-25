import React, {Component} from 'react';
import axios from 'axios';

class IndividualStock extends Component {
  constructor() {
    super();
    this.state = {
      stockData: {}
    }
  }

  componentDidMount() {
    let symbol = this.props.symbol;
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=5min&apikey=demo')
      .then(res => {
        const stock = res.data['Meta Data'];
        console.log(stock); // json data
        console.log('symbol: ' + symbol); // stock symbol
        console.log('status: ' + res.status); // http status
        this.setState({ stockData: stock });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.stockData.length === 0) {
      console.log('stockData empty');
      return null;
    } else {
      console.log('stockData not empty');
      let stockData = this.state.stockData;
      return (
        <div>
          {
            Object.keys(stockData).map(function(key) {
              console.log(key + ' : ' + stockData[key]);
              if (key === '2. Symbol') {
                return <p key={key}>{stockData[key]}</p>
              }
            })
          }
        </div>
      )
    }    
  }
}

export default IndividualStock;