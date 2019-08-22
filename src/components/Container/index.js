import React from "react";
import { Container as ReactContainer } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

export default class Container extends React.Component {
  render() {
    let experienceEditorStyle = {};
    if (this.props.context.pageEditing) {
      experienceEditorStyle = {
        padding: 50,
        borderWidth: 1,
        borderColor: "orange",
        borderStyle: "dashed"
      };
    }
    return (
      <ReactContainer style={experienceEditorStyle}>
        <Placeholder
          name="jss-container"
          rendering={this.props.rendering}
          context={this.props.context}
        />
      </ReactContainer>
    );
  }
}

// export default function Container(props) {
//     return  <ReactContainer>
//     <Placeholder name="jss-container" rendering={props.rendering} />
//   </ReactContainer>
// }
