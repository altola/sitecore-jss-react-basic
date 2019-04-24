import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Hero = (props) => (
  <div>
    <Text field={props.fields.heading} />
    <Image field={props.fields.image} />
  </div>
);

export default Hero;
