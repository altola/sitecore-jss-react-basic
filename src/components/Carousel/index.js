import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Carousel = (props) => (
  <div>
    <p>Carousel Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Carousel;
