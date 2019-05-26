import React, {Component} from 'react';
import GoalCard from './GoalCard';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class NewGoal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: [],
      description: [],
      category: [],
      dueDate: []
    };

    this.addItems = this.addItems.bind(this);

    this.deleteItem = this.deleteItem.bind(this);


  };

  // Function that, if input is not blank, associates a Text value and Key to each
  // entry, concacts both into state, and resets the state of the input field.

  addItems(e) {
    if (this._inputTitleElement.value !== "" & this._inputDescriptionElement.value !== "") {
      var newItem = {
        titleText: this._inputTitleElement.value,
        descriptionText: this._inputDescriptionElement.value,
        categoryOption: this._dropDownCategoryElement.value,
        dueDateText: this._inputDueDateElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {title: prevState.title.concat(newItem),
                description: prevState.description.concat(newItem),
                dueDate: prevState.dueDate.concat(newItem)};
      });

      console.log(this.state.title);

      this._inputTitleElement.value = "";
      this._inputDescriptionElement.value = "";
      this._inputDueDateElement.value = "";

    };

      e.preventDefault();

    };


  // Deletes entry item by id

  deleteItem(key) {
    var filteredItems = this.state.title.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      title: filteredItems,
      description: filteredItems,
      dueDate: filteredItems
    });
  };



  render() {
    return (
      <div className="container todoListMain">
      <h2>Create a New Goal:
      </h2>
      <div className="card col-9">
        <div className="card-body">
          <form onSubmit={this.addItems}>
            <input ref={(a) => this._inputTitleElement = a} name="_inputTitleElement" placeholder="Title" className="form-control-plaintext"></input>
            <input ref={(a) => this._inputDescriptionElement = a} name="_inputDescriptionElement" placeholder="Description" className="form-control-plaintext"></input>
            <input ref={(a) => this._inputDueDateElement = a} name="_inputDueDateElement" placeholder="Due Date" className="form-control-plaintext"></input>
            <div id="submitButtonSection">
              <DropdownButton ref={(a) => this._dropDownCategoryElement = a} size="sm" variant="secondary" id="dropdown-basic-button" title="Category">
                <Dropdown.Item href="#/action-1">Travel</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Finance</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Health & Wellness</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Culture</Dropdown.Item>
              </DropdownButton>
              <button className="btn-sm btn-primary" type="submit">Share</button>
            </div>
          </form>
        </div>
      </div>
        <GoalCard titleEntries={this.state.title}
                delete={this.deleteItem}
                descriptionEntries={this.state.description}
                dueDateEntires={this.state.dueDate}
        />
    </div>)
  }
}
