import React, { Component } from 'react';
//import FlipMove from 'react-flip-move';

export default class GoalCard extends Component {

  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);

    this.delete = this.delete.bind(this)
  };

  createItem(item){
    return (
      <div
      className ="card col-9"
      key={item.key}>
        <div className="card-header">
          <b>
          {item.titleText}
          </b>
        </div>
        <br></br>
        <div className="card-body">
          {item.descriptionText}
          <div>
            <button className="btn btn-light"> Join </button>
            <button className="btn btn-light"> Progress </button>
            <button className="btn btn-light" onClick={() => this.delete(item.key)}> Delete </button>
          </div>
        </div>
      </div>
  )};

  delete(key) {
    this.props.delete(key);
  };

  render() {

     var titleEntry = this.props.titleEntries.map(this.createItem);
     var descriptionEntry = this.props.descriptionEntries.map(this.createItem);

    return (
      <div>
          {titleEntry}
      </div>
    )
  }
};
