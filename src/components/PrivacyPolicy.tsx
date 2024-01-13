import React from "react";
import { Button, Content, Media, Modal } from "react-bulma-components";

const PrivacyPolicy: React.FC = () => {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <>
      <Button color="ghost" onClick={() => setIsShown(true)}>
        Privacy Policy
      </Button>
      <Modal onClose={() => setIsShown(false)} show={isShown}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title> mccorry.dev Privacy Policy</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Content>
                  <p>
                    <strong>Contact Details</strong>
                    <br />
                    <ul>
                      <li>Name: Matthew McCorry </li>
                      <li>Phone Number: (+44) 7851326402</li>
                      <li>E-mail: mccorry@gmail.com</li>
                    </ul>
                  </p>
                  <p>
                    <strong>The type of personal information we collect</strong>
                    <br />
                    We currently collect and process the following information:
                    <ul>
                      <li>User metrics</li>
                    </ul>
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
          <Modal.Card.Footer>
            <Button color="success" onClick={() => setIsShown(false)}>
              Ok
            </Button>
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
