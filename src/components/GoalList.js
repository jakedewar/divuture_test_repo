import React, { Component } from 'react';
import GoalCard from './GoalCard';
import FlipMove from 'react-flip-move';

export default class GoalList extends Component {



render(){

    return (
      <ul className="col-9 theList">
        <FlipMove duration={250} easing="ease-out">
          {GoalCard}
        </FlipMove>
      </ul>
    );
  }
};
