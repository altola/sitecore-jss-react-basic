import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const MegaHero = (props) => (
  <div>
    <Text tag={"h1"} field={props.fields.heading} />
    <Image field={props.fields.image} />
  </div>
);

export default MegaHero;
