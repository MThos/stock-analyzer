import { Component } from 'react';
import './App.css';
import Title from './components/Title';
import BasicDetails from './components/BasicDetails';
import DailyChart from './components/DailyChart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "IBM"
    }
  }

  render() {
    return (
      <div className="App">
        <Title title="Stock Analyzer" />
        <BasicDetails />
        <DailyChart />
      </div>
    );
  }  
}

export default App;
