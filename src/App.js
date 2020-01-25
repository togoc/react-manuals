//https://react.docschina.org/docs/react-component.html
import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  //挂载 1 
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 0,
          title: '吃饭'
        },
        {
          id: 1,
          title: '吃饭'
        },
      ]
    }
    console.log('constructor')
  }

  //挂载 2 ,它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
  //更新 1
  // static getDerivedStateFromProps(props, state) {
  //   //比如说 false=>未完成 true=>已完成 会用到
  //   return null
  // }

  addTodo = (v) => {
    v = v.replace(/^\s*|\s*$/g, '');
    if (v === '') return;
    this.setState({
      todos: [...this.state.todos, {
        id: Math.random(),
        title: v
      }]
    })
  }
  del = (id) => {
    this.setState(() => {
      this.state.todos.forEach((v, i, t) => {
        if (v.id === id) {
          this.state.todos.splice(i, 1)
        }
      })
      return this.state.todos
    }, () => {
      
    })
  }

  //更新 2 
  // 根据返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }


  //挂载 3 
  //更新 3
  render() {
    console.log('render')
    return (
      <>
        <ul>
          {
            this.state.todos.map(v => {
              return <li onClick={() => {
                this.del(v.id)
              }} key={v.id}>{v.title}
                <span>🗑</span>
              </li>
            })
          }
          <li>
            <input type="text"
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  this.addTodo(e.currentTarget.value)
                  e.currentTarget.value = ""
                }
              }}
            />
          </li>
        </ul>
      </>
    )
  }

  //挂载 4
  componentDidMount() {
    console.log('componentDidMount')
  }

  //更新 4 在最近一次渲染输出（提交到 DOM 节点）之前调用。
  // getSnapshotBeforeUpdate() {
  //   console.log('getSnapshotBeforeUpdate')
  // }

  //更新 5 会在更新后会被立即调用。首次渲染不会执行此方法。
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // 卸载 1
  // 当组件从 DOM 中移除时会调用如下方法
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // 错误处理 1 此生命周期会在后代组件抛出错误后被调用。
  // static getDerivedStateFromError(error) {
  // console.log({ hasError: error })
  // }
  // 错误处理 2
  // componentDidCatch(error, info) {
  // console.log({ error, info })
  // }
}




