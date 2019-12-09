import React, { Component } from 'react';
import TodoItem from './ToDoItem';
import { connect } from 'react-redux';
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
            return <div className="todos collection"><div className="collection-item">Nothing to do here !</div></div>
        }
        else if (divList.length === 0 && this.props.completed) {
            return <div></div>
        }
        return (
            //Wrapper for the items
            <div role="list" className="todos collection">
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
            </div>
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