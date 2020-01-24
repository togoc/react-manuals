import React, { Component } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
} from './component'

export default class App extends Component {
  constructor() {
    super()
  }
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
  addTodo = (v) => {
    this.setState({
      todos: [...this.state.todos, v]
    })
  }
  handleComplete = (id) => {
    this.state.todos.forEach((v, i, todos) => {
      if (v.id === id)
        v.isCompleted = !v.isCompleted
    })
    this.setState({
      todos: this.state.todos
    })
  }
  handleDel = (id) => {
    this.setState(
      () => {
        this.state.todos.forEach((v, i, todos) => {
          if (v.id === id)
            todos.splice(i, 1)
        })
        return {
          todos: this.state.todos
        }
      }
    )
  }
  componentDidMount() {
    this.setState({
      isLiked: '❤'
    })
  }
  render() {
    return (
      <>
        <h1>{this.state.isLiked}</h1>
        <TodoHeader name="togoc">{this.state.title}</TodoHeader>
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          ref={this.test}
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDel={this.handleDel}
        />
      </>
    )
  }
}
