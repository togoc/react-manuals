import React from 'react';
import ReactDOM from 'react-dom'

// 创建简单的react元素
// const app = <h1>welcome</h1>

//原理
// const createApp = (props) => {
//     return (
//         <h1>welcome {props.title}</h1>
//     )
// }
// const app = createApp({
//     title: '16.12.0'
// })

// ReactDOM.render(
//     app,
//     document.querySelector("#root")
// )


//函数标签的形式 标签开头要大写
// const App = (props) => {
//     return (
//         <h1>welcome {props.title}</h1>
//     )
// }




// 类形式渲染原理
// class App extends React.Component {
//     render() {
//         console.log(this.props)
//         const { title } = this.props
//         return (
//             <h1>welcome {title}</h1>
//         )
//     }
// }
// const app = new App({
//     title: '16.12.0',
//     name: 'togoc'
// }).render()


//jsx原理
// const dom = {
//     tag: 'div',
//     attrs: {
//         className: 'app',
//         id: 'app'
//     },
//     children: [{
//         tag: 'h1',
//         children: ['这是一个h1标签']
//     }]
// }
class App extends React.Component {
    render() {
        return (
            React.createElement(
                'div', {
                className: 'app',
            },
                '这是一个div标签',
                React.createElement(
                    'h1', {

                },
                    '这是一个h1标签'
                )
            )
        )
    }
}

ReactDOM.render(
    <App title="16.12.0" />, //相当于自动执行了App里的render
    // app,
    document.querySelector("#root")
)