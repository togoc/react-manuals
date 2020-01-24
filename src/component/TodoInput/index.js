import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor() {
        super()
    }
    static defaultProps = {
        btnText: '添加'
    }
    state = {
        inValue: ''
    }
    handleChange = (e) => {
        let value = e.currentTarget.value
        this.setState({
            inValue: value
        }, () => {
            // console.log(this.state.inValue)
        })
    }
    //非箭头函数绑定事件方法
    handle(v) {
        console.log('handle:', v)
    }
    commit = (v) => {
        v = String(v).replace(/^\s*|\s*$/g, '')
        if (v === '') return
        this.props.addTodo({
            id: Math.ceil(Math.random() * 10000000000),
            title: v,
            isCompleted: false
        })
        this.setState({
            inValue: ''
        }, () => {
            this.refs.input.focus()
        })
    }
    render() {
        const { commit } = this
        return (
            <>
                <input type="text"
                    ref="input"
                    value={this.state.inValue}
                    onChange={this.handleChange}
                    onKeyUp={
                        (e) => {
                            // console.log(e.keyCode)
                            e.keyCode === 13 && commit(this.state.inValue)
                        }
                    }
                /><button
                    onClick={
                        () => {
                            commit(this.state.inValue)
                        }
                        // this.handle.bind(this, '123')
                    }
                >{this.props.btnText}</button>
            </>
        )
    }
}
