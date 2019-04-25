import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";
import { Container, Row } from "reactstrap";

const Grid = props => (
  <Container>
    <Row>
      <Placeholder
        name="jss-row"
        rendering={props.rendering}
        route={props.route}
        context={props.context}
      />
    </Row>
  </Container>
);

export default Grid;
