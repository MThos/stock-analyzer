import { Component } from 'react';
import './App.css';
import Title from './components/Title';
import TextInput from './components/TextInput';
import BasicDetails from './components/BasicDetails';
import DailyChart from './components/DailyChart';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "Stock Analyzer"
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      this.setState({ symbol: e.target.value });
      e.target.blur();
      e.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <Title title={this.state.symbol} />
          <TextInput placeholder="Symbol" handleKeyPress={this.handleKeyPress} />
        </header>
        <BasicDetails />
        <section>
          <DailyChart />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }  
}

export default App;
