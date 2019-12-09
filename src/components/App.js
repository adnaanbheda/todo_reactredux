import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import TodoList from './ToDoList';
import { addTodo, clearComplete } from '../actions/index'
import './App.js.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //Create ref to access input tag's value
    this.input = React.createRef();
  }
  //Handles Text for adding todo and dispatches the addTodo Action
  handleSubmit(event) {
    if (this.input.current.value !== '') {
      //Getting the current value
      let text = this.input.current.value
      //Dispatch
      this.props.addTodo(text);
      //Clear the text field again
      this.input.current.value = '';
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="App container" >
        <h1 className="center">todos </h1>
        <input
          //Input field for accepting text, OnKeyPress checks for Enter and dispatches AddTodo action
          //Assiging this.input ref here
          type="text" ref={this.input}
          onKeyPress={(e) => { if (e.key === 'Enter') { this.handleSubmit(e) } }}
          placeholder="What needs to be done?"
          style={{ margin: '50px 25px' }}
        />

        <TodoList
          //Incomplete todos list
          completed={false} />
        <br />
        <h1>Completed</h1>
        <p
          //Dispatches the clearComplete action on click
          className="clear" onClick={() => this.props.clearComplete()}>Clear?</p>
        <TodoList
          //Completed List
          completed={true} />
      </div>
    );
  }
}


//Passing Dispatch functions as props for access in component
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => { dispatch(addTodo(text)) },
    clearComplete: () => { dispatch(clearComplete()) }
  };
}

//Higher order Component

export default connect(null, mapDispatchToProps)(App);
