import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import { Container, Row, Col } from "reactstrap";

const ThreeColumn = props => (
  <Container>
    <Row>
      <Col xs="4">
        <Placeholder
          name="jss-left-col"
          rendering={props.rendering}
          route={props.route}
          context={props.context}
        />
      </Col>
      <Col xs="4">
        <Placeholder
          name="jss-mid-col"
          rendering={props.rendering}
          route={props.route}
          context={props.context}
        />
      </Col>
      <Col xs="4">
        <Placeholder
          name="jss-right-col"
          rendering={props.rendering}
          route={props.route}
          context={props.context}
        />
      </Col>
    </Row>
  </Container>
);

export default ThreeColumn;
