import React from 'react';
import './App.css';
const API_KEY = process.env.CAT_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default App;
