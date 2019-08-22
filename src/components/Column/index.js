import React from "react";
import { Col } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

export default class Column extends React.Component {
  render() {
    let experienceEditorStyle = {};
    if (this.props.context.pageEditing) {
      experienceEditorStyle = {
        padding: 50,
        borderWidth: 1,
        borderColor: "red",
        borderStyle: "dashed"
      };
    }
    return (
      <Col {...this.props.params} style={experienceEditorStyle}>
        <Placeholder
          name="jss-container-column"
          rendering={this.props.rendering}
          context={this.props.context}
        />
      </Col>
    );
  }
}
