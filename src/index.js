
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import NewGoal from './components/NewGoal';
import GoalList from './components/GoalList';
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <App />
    </div>,
    destination
);
