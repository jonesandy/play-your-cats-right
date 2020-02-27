import React from 'react';
import './App.css';
import { fetchCats } from './services/apiCall';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  async componentDidMount() {
    const data = await fetchCats()
    this.setState({cats: data})
  }

  render() {
    return (
      <h1>Play Your Cats Right</h1>
    )
  }
}

export default App;
