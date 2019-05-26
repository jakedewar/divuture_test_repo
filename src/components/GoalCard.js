import React, { Component } from 'react';
//import FlipMove from 'react-flip-move';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class GoalCard extends Component {

  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);

    this.delete = this.delete.bind(this);
    this.alertJoin = this.alertJoin.bind(this);
  };


  createItem(item){
    return (
      <div
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
              <button className="btn btn-light"> Comment </button>
            </div>
            <div id="cardButtonRight">
              <button className="btn btn-light" onClick={() => this.alertJoin(item.key)}> Join </button>
              <button className="btn btn-light"> Share </button>
              <button className="btn btn-light" onClick={() => this.delete(item.key)}> Delete </button>
            </div>
          </div>
        </div>
      </div>
  )};

  delete(key) {
    this.props.delete(key);
  };

  alertJoin(key){
    alert('Please confirm that you want to join this goal.');
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
