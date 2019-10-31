import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import HelpPopover from '../../HelpPopover';

const Step1 = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        <HelpPopover id="insurance-quote" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        <HelpPopover id="policy-number" />
      </FormGroup>
    </Form>
  );
}

export default Step1;