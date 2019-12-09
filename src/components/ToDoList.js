import React, { Component } from 'react';
import TodoItem from './ToDoItem';
import { connect } from 'react-redux';
const todoItemStyle = {
    // borderBottom: '2px solid rgb(237, 237, 237) ',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '24px',
    color: 'gray'
}
class ToDoList extends Component {
    render() {

        //Log Props for Debugging
        console.log(this.props);
        let divList = [];

        //Make a list with completed todos if completed prop is passed
        if (this.props.completed) {
            divList = this.props.todos
                .filter((todo) => todo.completed === true);
        }
        //Make a list with incomplete todos if completed prop is false
        else {
            divList = this.props.todos
                .filter((todo) => todo.completed !== true);
        }
        if (divList.length === 0 && !this.props.completed) {
            return (<div className="todos collection">
                <div
                    style={todoItemStyle}
                    className="collection-item">
                    Nothing to do here !
                    </div>
            </div>);
        }
        else if (divList.length === 0 && this.props.completed) {
            return <div></div>
        }
        return (
            //Wrapper for the items
            <ul className="todos collection" style={this.props.style}>
                {
                    //Mapping each value in state to return a TodoItem UI component
                    divList.map((todo) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                completed={this.props.completed}
                                text={todo.text} />
                        );
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state
    };
}

//Higher Order Component
export default connect(mapStateToProps)(ToDoList); 