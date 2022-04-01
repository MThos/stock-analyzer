import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BasicDetails from './components/BasicDetails';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: "charts",
      symbol: ""
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      this.setState({ symbol: e.target.value });
      e.target.blur();
      e.target.value = "";
    }
  }

  onClick = (e) => {
    this.setState({ active: e.target.id });
  }

  render() {
    return (
      <div className="App">
        <Header symbol={this.state.symbol} handleKeyPress={this.handleKeyPress} />
        <BasicDetails />
        <NavBar active={this.state.active} onClick={this.onClick} />
        <Section active={this.state.active} />
        <Footer />
      </div>
    );
  }  
}

export default App;
