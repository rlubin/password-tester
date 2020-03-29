import React from "react";
import "./App.css";
import { Button, Card, Modal } from "semantic-ui-react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      modalOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.update();
  };

  render() {
    // console.log(this.state);
    return (
      <Card>
        <Card.Content>
          <Card.Header>Enter password for {this.props.type}</Card.Header>
          <Modal
            open={this.state.modalOpen}
            trigger={
              <Button
                primary
                disabled={this.props.disabled}
                onClick={this.handleOpen}
              >
                Enter
              </Button>
            }
          >
            <Modal.Header>Enter password for {this.props.type}</Modal.Header>
            <Modal.Content>
              <Modal.Description></Modal.Description>
              <Modal.Actions>
                <Button onClick={this.handleClose}>Done</Button>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    );
  }
}

export default Test;