import React, { Component } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
} from './component'

export default class App extends Component {
    state = {
        title: '待办事项',
        todos: [
            {
                id: 0,
                title: '吃饭',
                isCompleted: true
            },
            {
                id: 1,
                title: '睡觉',
                isCompleted: true
            },
            {
                id: 2,
                title: '敲代码',
                isCompleted: false
            }
        ]
    }
    componentDidMount() {
        // this.setState((preState, preProps) => {
        //     return {
        //         isLiked: '❤'
        //     }
        // })
        this.setState({
            isLiked: '❤'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.isLiked}</h1>
                <TodoHeader name="togoc">{this.state.title}</TodoHeader>
                <TodoInput />
                <TodoList todos={this.state.todos} />
            </>
        )
    }
}
