/**
 * this creates an box with a button that when clicked opens a modal
 * the modal displays the password scheme as well as the password for its account
 * the modal allows you to practice the password
 * this file contains logic for password verification
 */

import React from "react";
import parse from "html-react-parser";
import "./App.css";
import {
  Header,
  Button,
  Card,
  Modal,
  Grid,
  Message,
  Divider,
  Transition,
} from "semantic-ui-react";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      modalOpen: false,
      emojis: [
        "&#x1F600;",
        "&#x1F601;",
        "&#x1F912;",
        "&#x1F61B;",
        "&#x1F920;",
        "&#x1F9D0;",
        "&#x1F606;",
        "&#x1F607",
        "&#x1F608;",
        "&#x1F609;",
        "&#x1F60A;",
        "&#x1F92F;",
        "&#x1F913;",
        "&#x1F60D;",
        "&#x1F60E;",
        "&#x1F60F;",
        "&#x1F610;",
        "&#x1F631;",
        "&#x1F612;",
        "&#x1F613;",
        "&#x1F922;",
        "&#x1F615;",
        "&#x1F616;",
        "&#x1F911;",
        "&#x1F618;",
      ],
      testPassword: "",
      correctPassword: false,
      incorrectPassword: false,
    };
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.updateProgress();
  };

  practicePassword = () => {
    if (this.state.password === this.state.testPassword) {
      if (this.state.incorrectPassword === true)
        this.setState({ incorrectPassword: false });
      this.setState({ correctPassword: true });
      this.setState({ testPassword: "" });
    } else {
      if (this.state.correctPassword === true)
        this.setState({ correctPassword: false });
      this.setState({ incorrectPassword: true });
      this.setState({ testPassword: "" });
    }
  };

  inputPassword = (input) => {
    this.setState({ testPassword: this.state.testPassword.concat(input) });
  };

  render() {
    return (
      <Card centered={true}>
        <Card.Content>
          <Card.Header>Create password for {this.props.type}</Card.Header>
          <Modal
            open={this.state.modalOpen}
            trigger={
              <Button
                primary
                disabled={this.props.disabled}
                onClick={this.handleOpen}
              >
                Create
              </Button>
            }
          >
            <Modal.Header>Create password for {this.props.type}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header as="h4">
                  Your password is:{" "}
                  <Header as="h1">{parse(this.state.password)}</Header>
                </Header>
              </Modal.Description>
              <Header as="h4">
                Intructions: Click the icons below in the order shown above and
                click test to see if what you entered is correct.
              </Header>
              <Header as="h4">
                You entered:{" "}
                <Header as="h1">{parse(this.state.testPassword)}</Header>
              </Header>
              <Divider hidden />
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[0])}
                    >
                      {parse(this.state.emojis[0])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[1])}
                    >
                      {parse(this.state.emojis[1])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[2])}
                    >
                      {parse(this.state.emojis[2])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[3])}
                    >
                      {parse(this.state.emojis[3])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[4])}
                    >
                      {parse(this.state.emojis[4])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[5])}
                    >
                      {parse(this.state.emojis[5])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[6])}
                    >
                      {parse(this.state.emojis[6])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[7])}
                    >
                      {parse(this.state.emojis[7])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[8])}
                    >
                      {parse(this.state.emojis[8])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[9])}
                    >
                      {parse(this.state.emojis[9])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[10])}
                    >
                      {parse(this.state.emojis[10])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[11])}
                    >
                      {parse(this.state.emojis[11])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[12])}
                    >
                      {parse(this.state.emojis[12])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[13])}
                    >
                      {parse(this.state.emojis[13])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[14])}
                    >
                      {parse(this.state.emojis[14])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[15])}
                    >
                      {parse(this.state.emojis[15])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[16])}
                    >
                      {parse(this.state.emojis[16])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[17])}
                    >
                      {parse(this.state.emojis[17])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[18])}
                    >
                      {parse(this.state.emojis[18])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[19])}
                    >
                      {parse(this.state.emojis[19])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[20])}
                    >
                      {parse(this.state.emojis[20])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[21])}
                    >
                      {parse(this.state.emojis[21])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[22])}
                    >
                      {parse(this.state.emojis[22])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[23])}
                    >
                      {parse(this.state.emojis[23])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[24])}
                    >
                      {parse(this.state.emojis[24])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Modal.Actions>
                <Divider hidden />
                <Button onClick={this.practicePassword}>Test</Button>
                <Divider hidden />
                <Transition
                  visible={this.state.correctPassword}
                  animation="scale"
                  duration={500}
                >
                  <Message color="green">Correct Password</Message>
                </Transition>
                <Transition
                  visible={this.state.incorrectPassword}
                  animation="scale"
                  duration={500}
                >
                  <Message color="red">Incorrect Password</Message>
                </Transition>
                <Modal.Description>
                  <Header as="h4">
                    Clicking the "Done" button will close this popup and you
                    won't be able to access it again
                  </Header>
                </Modal.Description>
                <Button onClick={this.handleClose}>Done</Button>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    );
  }
}

export default Create;
