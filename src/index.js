import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from './nav';
import NewGoal from './components/NewGoal';
import GoalList from './components/GoalList';
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <Nav />
        <NewGoal />
        <GoalList />
    </div>,
    destination
);
