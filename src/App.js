import React, { Component, createContext } from 'react'
//第一种方法
const ThemeContext = React.createContext('light');

//第二种方法 
const {
    Provider,
    Consumer
} = createContext()

class CountBtn extends Component {
    //第一种方法
    static contextType = ThemeContext;
    render() {
        let props = this.props
        console.log(this.context) //light
        return (
            <button {...props} />
        )
    }
}

class Counter extends Component {

    render() {

        return (
            //第二种方法 
            <Consumer>
                {/* Consumer必须使用函数传参的方法 */}
                {
                    (arg) => {
                        return <span>{arg}</span>
                    }
                }
            </Consumer >
        )
    }
}

export default class App extends Component {
    state = {
        count: 10
    }
    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    }
    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    render() {
        // 通过provider组件的value传值,无需在Counter组件写prop
        return (
            <Provider value={this.state.count}>
                <CountBtn onClick={this.decrement}>-</CountBtn>
                <Counter />
                <CountBtn onClick={this.increment}>+</CountBtn>
            </Provider>
        )
    }
}
