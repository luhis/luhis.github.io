import React from "react";
import { Button, Form } from "react-bulma-components";

const { Control } = Form;

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      I am available for freelance work! If you have any requirement for
      .Net/React development please get in touch:
      <Control>
        <Button
          color="primary"
          renderAs="a"
          href="mailto:mccorry@gmail.com?subject=Freelance Request"
        >
          Email me
        </Button>
      </Control>
    </React.Fragment>
  );
};

export default Contact;
