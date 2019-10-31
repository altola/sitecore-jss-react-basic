import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import gql from "graphql-tag";
import GraphQLData from "../../lib/GraphQLData";

const QUERY = gql`
  query helpQuery($id: String!) {
    help: search(
      rootItem: "{3DC46B98-234E-464C-9F12-3BF8B13E14D4}"
      keyword: $id
    ) {
      results {
        items {
          item {
            ... on HelpText {
              text {
                value
              }
            }
          }
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
    // TODO: safer accessor of help text property
    helpText = result.help.results.items[0].item.text.value;
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
