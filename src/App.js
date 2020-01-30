import React, { Component } from 'react'
import { increment, decrement, decrementAsyn } from './action/cart'
import { connect } from 'react-redux'
class App extends Component {
    state = {
        cart: []
    }
    getState = () => {
        this.setState((state) => {
            let { cart } = this.props
            return { cart }
        })
    }
    componentDidMount() {
        this.getState()
        // this.props.store.subscribe(this.getState) //修改数据后重新渲染
    }
    render() {
        const { decrement, increment, decrementAsyn } = this.props
        console.log(this.props)
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
                                        // decrement(v.id)
                                        //异步延迟两秒
                                        decrementAsyn(v.id)
                                    }}>-</button>
                                    {v.amount}
                                    <button onClick={() => {
                                        increment(v.id)
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

//connect传递的内容都会传到目标的props
export default connect((state) => {
    return state
}, { increment, decrement, decrementAsyn })(App)
 //{ ...Actions }

//第二个参数等价于 
/**
 dispatch => {
    return {
        increment: (id) => dispatch(increment(id))
        ,
        decrement: (id) => dispatch(decrement(id))
    }
}
 */
