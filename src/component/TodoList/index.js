import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        const { todos, handleComplete, handleDel } = this.props
        return (
            <ul>
                {
                    todos.map(v => {
                        return <TodoItem {...v}
                            handleDel={handleDel}
                            handleComplete={handleComplete} key={v.id} />
                    })
                }
            </ul>
        )
    }
}
