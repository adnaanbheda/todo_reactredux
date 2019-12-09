import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions/index';
import "./ToDoItem.js.css";
class ToDoItem extends Component {
    state = {
        hover: false
    }
    handleClick(e) {
        console.log("Click")
        this.props.toggleToDo(this.props.id);
    }
    mouseOver() {
        this.setState({ hover: true });
    }
    mouseLeave() {
        this.setState({ hover: false })
    }
    render() {
        console.log(this.props);
        return (
            <div
                className="item collection-item"
                onClick={() => { this.handleClick() }}
                onMouseOver={() => this.mouseOver()}
                onMouseLeave={() => this.mouseLeave()}
                style={{ textDecoration: this.state.hover || this.props.completed ? 'line-through' : null }}>
                {this.props.text}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleToDo: (id) => dispatch(toggleToDo(id))
    }
};

export default connect(null, mapDispatchToProps)(ToDoItem);