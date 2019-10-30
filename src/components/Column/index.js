import React from "react";
import { Col } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const Column = props => {
  return (
    <Col style={{ padding: 30 }}>
      <Placeholder name="jss-column" rendering={props.rendering} />
    </Col>
  );
};

export default Column;
