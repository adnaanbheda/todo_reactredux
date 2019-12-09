import React, { Component } from 'react';
import TodoItem from './ToDoItem';
import { connect } from 'react-redux';
class ToDoList extends Component {
    render() {
        console.log(this.props);
        let divList = [];
        if (this.props.completed) {
            divList = this.props.todos
                .filter((todo) => todo.completed === true);
        }
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
            <div role="list" className="todos collection">
                {
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


export default connect(mapStateToProps)(ToDoList); 