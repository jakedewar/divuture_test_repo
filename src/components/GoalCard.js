import React, { Component } from 'react';
//import FlipMove from 'react-flip-move';

export default class GoalCard extends Component {

  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
    //this.combineProps = this.combineProps.bind(this);
    this.delete = this.delete.bind(this)
  };

  // combineProps(){
  //   var combinedProps = this.props.entires + this.props.description
  // };


  //Test text

  createItem(item){
    return (
      <li
      onClick={() => this.delete(item.key)}
      className ="card"
      key={item.key}>
        Title: {item.titleText}
        <br></br>
        Description: {item.descriptionText}
        <button className="btn btn-primary"> Join </button>
        <button className="btn btn-primary"> Promote </button>
      </li>
  )};

  delete(key) {
    this.props.delete(key);
  };

  render() {

     var titleEntry = this.props.titleEntries.map(this.createItem);
     var descriptionEntry = this.props.descriptionEntries.map(this.createItem);
     // var listTitle = titleEntry.map(this.createItem);
     // var listDescription = descriptionEntry.map(this.createItem);
     //var listItems = (titleEntry + descriptionEntry);

    return (
      <ul className="col-9 theList">
          {titleEntry}
      </ul>
    )
  }
};
