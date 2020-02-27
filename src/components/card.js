import React from 'react';
import { Card, Image } from 'semantic-ui-react';

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
        <p>This cat has a score of {cat.breeds[0].energy_level + cat.breeds[0].affection_level + cat.breeds[0].stranger_friendly}</p>
      </Card.Content>
    </Card>
  )
};

export default Contacts;
