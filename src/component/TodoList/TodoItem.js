import React, { Component } from 'react'
import "./TodoItem.css"
export default class TodoItem extends Component {
    render() {
        const { title, isCompleted, handleComplete, id, handleDel } = this.props
        return (
            <li>
                <input type="checkbox"
                    checked={isCompleted}
                    onChange={
                        () => {
                            handleComplete(id)
                        }
                    } />
                <span title="删除"
                    onClick={() => handleDel(id)}
                >{title}</span>
                <span title="修改"
                    onClick={() => handleComplete(id)}
                >{isCompleted ? '  已完成' : '  未完成'}</span>
            </li>
        )
    }
}
