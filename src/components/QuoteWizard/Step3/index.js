import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Step3 = props => {
  return (
    <Form>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
    </Form>
  );
};

export default Step3;
