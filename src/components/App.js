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
    this.input = React.createRef();
  }

  handleSubmit(event) {
    if (this.input.current.value !== '') {
      let text = this.input.current.value
      this.props.addTodo(text);
      this.input.current.value = '';
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="App container" >
        <h1 className="center">todos </h1>
        <input
          type="text" ref={this.input}
          onKeyPress={(e) => { if (e.key === 'Enter') { this.handleSubmit(e) } }}
          placeholder="What needs to be done?"
          style={{ margin: '50px 25px' }}
        />

        <TodoList completed={false} />
        <br />
        <h1>Completed</h1>
        <p className="clear" onClick={() => this.props.clearComplete()}>Clear?</p>
        <TodoList completed={true} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => { dispatch(addTodo(text)) },
    clearComplete: () => { dispatch(clearComplete()) }
  };
}



export default connect(null, mapDispatchToProps)(App);
