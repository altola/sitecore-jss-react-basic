import React from "react";
import { Row as ReactRow } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

export default class Row extends React.Component {
  render() {
    let experienceEditorStyle = {};
    if (this.props.context.pageEditing) {
      experienceEditorStyle = {
        padding: 50,
        borderWidth: 1,
        borderColor: "blue",
        borderStyle: "dashed"
      };
    }
    return (
      <ReactRow style={experienceEditorStyle}>
        <Placeholder
          name="jss-container-row"
          rendering={this.props.rendering}
          context={this.props.context}
        />
      </ReactRow>
    );
  }
}
