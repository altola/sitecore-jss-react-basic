import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Jumbo = (props) => (
  <div>
    <p>Jumbo Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Jumbo;
