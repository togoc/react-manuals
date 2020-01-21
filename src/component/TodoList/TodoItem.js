import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, isCompleted } = this.props
        return (
            <li>
                {title} {isCompleted ? '已完成' : '未完成'}
            </li>
        )
    }
}
