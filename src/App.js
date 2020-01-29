import React, { Component } from 'react'
import { increment, decrement } from './action/cart'

export default class App extends Component {
    state = {
        cart: []
    }
    getState = () => {
        this.setState((state) => {
            return this.props.store.getState() //{cart:[]}
        })
    }
    componentDidMount() {
        this.getState()
        this.props.store.subscribe(this.getState) //修改数据后重新渲染
    }
    render() {
        const { dispatch } = this.props.store
        return (
            <table border='1' cellSpacing="0">
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>价格</th>
                        <th>数量</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cart.map(v => (
                            <tr key={v.id}>
                                <td>{v.title}</td>
                                <td>{v.price}</td>
                                <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <button onClick={() => {
                                        dispatch(decrement(v.id))
                                    }}>-</button>
                                    {v.amount}
                                    <button onClick={() => {
                                        dispatch(increment(v.id))
                                    }}>+</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}
