import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        const { todos } = this.props
        return (
            <ul>
                {
                    todos.map(v => {
                        return <TodoItem {...v} key={v.id} />
                    })
                }
            </ul>
        )
    }
}
