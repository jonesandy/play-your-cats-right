import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { computeScore } from '../utils/computeScore';

const Contacts = ({ cat }) => {
  return (
    <Card >
      <Image src={cat.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cat.breeds[0].name}</Card.Header>
        <Card.Description>
          {cat.breeds[0].description}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <p>This cat has a score of {computeScore(cat)}</p>
      </Card.Content>
      <Button color='teal'>Show Score!</Button>
    </Card>
  )
};

export default Contacts;
