import React, { Component } from 'react';
import GoalCard from "../GoalCard.js";

export default class joinGoal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.joinGoal = this.joinGoal.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getTitle(item) {
    return(
      <div key={item.titleText}>
      {"Join " + item.titleText}
      </div>
    );
  }

  render() {

    var joinGoalText = this.props.titleEntries.map(this.getTitle);

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Join Goal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{joinGoalText} </Modal.Title>
          </Modal.Header>
          <Modal.Body>This goal will be added to your Goal list.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Join
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};
