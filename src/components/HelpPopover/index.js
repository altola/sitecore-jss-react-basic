import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import gql from "graphql-tag";
import GraphQLData from "../../lib/GraphQLData";

const QUERY = gql`
  query helpQuery($path: String!) {
    help: item(path: $path) {
      ... on HelpText {
        name
        text {
          value
        }
      }
    }
  }
`;

const HelpPopover = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const result = props.helpQuery;
  const { error, loading } = result;
  let helpText = "";
  if (!loading && !error) {
    helpText = result.help.text.value;
  }

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id={props.id} type="button">
        ?
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target={props.id}
        toggle={toggle}
      >
        <PopoverBody>{helpText}</PopoverBody>
      </Popover>
    </div>
  );
};

export default GraphQLData(QUERY, {
  name: "helpQuery"
})(HelpPopover);
