import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodos } from "../store/actions/actions"
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'

class TodoContainer extends Component {
    state = {
        todo: {
            title: ""
        }
    }

    handleChange = (event) => {
        const todo = { ...this.state.todo, title: event.target.value }
        this.setState({ todo })
    }

    handleSumbit = (event) => {
        event.preventDefault()
        this.props.createTodos(this.state.todo)
        alert(this.state.todo.title)
    }

    render() {
        console.log(this.state.todo)
        return <div>
            <h1>Add todos</h1>
            <input type="text" onChange={this.handleChange} value={this.state.todo.title}></input>
            <button onClick={this.handleSumbit}>add</button>
            {this.props.todos.map((el, idx) => {
                return <div key={idx}> {el.title}</div>
            })}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createTodos: bindActionCreators(createTodos, dispatch)
    }
}

TodoContainer.propTypes = {
    todos: PropTypes.array.isRequired,
    createTodos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);