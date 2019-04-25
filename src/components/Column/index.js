import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import { Col } from "reactstrap";

const Column = props => (
  <Col xs={props && props.params ? props.params.size : 3}>
    <Placeholder
      name="jss-column"
      rendering={props.rendering}
      route={props.route}
      context={props.context}
    />
  </Col>
);

export default Column;
