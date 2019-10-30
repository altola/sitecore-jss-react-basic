import React from "react";
import { Row as BootstrapRow } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const Row = props => {
  return (
    <BootstrapRow style={{ padding: 30 }}>
      <Placeholder name="jss-row" rendering={props.rendering} />
    </BootstrapRow>
  );
};

export default Row;
