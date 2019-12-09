import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions/index';
import "./ToDoItem.js.css";
class ToDoItem extends Component {
    //State to manage strikethrough on hover
    state = {
        hover: false
    }
    handleClick(e) {
        this.props.toggleToDo(this.props.id);
    }
    mouseOver() {
        this.setState({ hover: true });
    }
    mouseLeave() {
        this.setState({ hover: false })
    }
    render() {
        return (
            //MouseOver -> brings strikethrough transition
            //MouseLeave -> removes strikethrough transition
            //HandleClick -> Dispatches the ToggleToDo Action
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

//ToggleToDo action creator is passed to props
const mapDispatchToProps = (dispatch) => {
    return {
        toggleToDo: (id) => dispatch(toggleToDo(id))
    }
};
//Higher Order Component
export default connect(null, mapDispatchToProps)(ToDoItem);