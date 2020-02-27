import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Contacts = ({ cat }) => {
  return (
    <Card >
      <Image src={cat.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cat.breeds[0].name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <p>This cat has a rating of X</p>
      </Card.Content>
    </Card>
  )
};

export default Contacts;
