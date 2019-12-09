import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions/index';
import "./ToDoItem.js.css";

const style = {
    // borderBottom: '2px solid rgb(237, 237, 237) ',
    // padding: '10px 20px',
    // margin: '10px',
    cursor: 'pointer',
    fontSize: '32px',
    color: 'gray'
}
const iconStyle = {
    borderRadius: "50%",
    border: '0.5px #4d4d4d black',
    color: '#5DC2AF',
    margin: '5px',
    borderColor: '#'
}
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
            <li
                className=" item"
                onClick={() => { this.handleClick() }}
                onMouseOver={() => this.mouseOver()}
                onMouseLeave={() => this.mouseLeave()}
                style={{ ...style, textDecoration: this.state.hover || this.props.completed ? 'line-through' : null }}>
                {(() => {
                    if (this.props.completed) {
                        return <i style={iconStyle} className="material-icons ">check_circle</i>
                    }
                    else {
                        return <i style={iconStyle} className="material-icons ">done_outline</i>

                    }
                })()
                }
                {this.props.text}
            </li>
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