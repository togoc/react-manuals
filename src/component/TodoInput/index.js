import React, { Component } from 'react'

export default class TodoInput extends Component {
    static defaultProps = {
        btnText: '添加'
    }
    render() {
        return (
            <>
                <input type="text" /><button>{this.props.btnText}</button>
            </>
        )
    }
}
