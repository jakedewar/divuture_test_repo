import React, { Component } from 'react';
import GoalCard from "../GoalCard.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class JoinGoal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

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


  render() {

    var joinGoalTitle = this.props.titleEntries;

    return (
      <>
        <Button variant="light" onClick={this.handleShow}>
          Join
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{'Join ' + joinGoalTitle }</Modal.Title>
          </Modal.Header>
          <Modal.Body>{"This goal will be added to your Goal list under the"} <i>{"Goals"}</i> {"tab, or in:"} <i> {"Profile > Goal List >"} {joinGoalTitle} </i> </Modal.Body>
          <div className="card-body">
            <Button variant="primary" onClick={this.handleClose}>
              Join
            </Button>
          </div>
        </Modal>
      </>
    );
  }
};
