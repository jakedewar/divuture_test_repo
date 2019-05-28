import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JoinGoal from './modals/JoinGoal.js';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";


export default class GoalCard extends Component {

  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);

    this.delete = this.delete.bind(this);

    this.state = {modalShow: false,
                  open: false};

  };


  createItem(item){

    var modalClose = () => this.setState({ modalShow: false });
    const { open } = this.state;
    var commentOpen = () => this.setState({open: true});

    return (
      <Card
      className ="card col-9"
      key={item.key}>
        <Row className="card-header">
          <Col>
            <b>
            {item.titleText}
            </b>
          </Col>
          <Col id="progressSection">
            {<ProgressBar animated now={45} label={'45%'} />}
          </Col>
          <Col id="dueDateSection">
            <b>
            Due:{" "}
            </b>
            {item.dueDateText}
          </Col>
        </Row>
        <br></br>
        <div className="card-body">
          {item.descriptionText}
          <div id="cardButtonSection">
            <div id="cardButtonLeft">
              <button className="btn btn-light"> Like </button>
              <Button onClick={() => this.setState({ open: !open})}
                      variant="light"
                      aria-controls="example-collapse-text"
                      aria-expanded={open}>
                  Comment
              </Button>
            </div>
            <div id="cardButtonRight">
              <JoinGoal
                show={this.state.modalShow}
                onHide={modalClose}
                titleEntries={item.titleText}/>
              <button className="btn btn-light"> Share </button>
              <button className="btn btn-light" onClick={() => this.delete(item.key)}> Delete </button>
            </div>
          </div>
          <Collapse in={open}>
            <div>
              <Card.Body>
                <input placeholder="Write a comment" className="form-control-plaintext"></input>
              </Card.Body>
            </div>
          </Collapse>
        </div>
      </Card>
  )};

  delete(key) {
    this.props.delete(key);
  };

  render() {

     var titleEntry = this.props.titleEntries.map(this.createItem);
     var descriptionEntry = this.props.descriptionEntries.map(this.createItem);
     var dueDateEntry =  this.props.dueDateEntires.map(this.createItem);

    return (
      <div>
          {titleEntry}
      </div>
    )
  }
};
