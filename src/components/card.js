import React from 'react';
import './card.css';
import { Card, Image, Button } from 'semantic-ui-react';
import { computeScore } from '../utils/computeScore';

class CatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreHidden: true, 
      buttonHidden: false
    }
  }

  changeState = event => {
    this.setState({ scoreHidden: false });
  };

  render() {
    return (
      <Card >
        <Image src={this.props.cat.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.cat.breeds[0].name}</Card.Header>
          <Card.Description>
           {this.props.cat.breeds[0].description}
          </Card.Description>
        </Card.Content>

        <Card.Content className="score">
        
        {this.state.scoreHidden ? 
        <> </> :
         <p>This cat has a score of {computeScore(this.props.cat)}</p>
        }
        </Card.Content>
        <Button onClick={this.changeState} color='teal'>Show Score</Button>
      </Card>
    )
  }

}

export default CatCard;
