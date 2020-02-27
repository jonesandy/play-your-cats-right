import React from 'react';
import './App.css';
import Card from './components/card';
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
      <div className="cards">
        {this.state.cats.map((element) => {
        return (
          <Card cat={ element } />
        )
        })} 
      </div>
    )
  }
}

export default App;
