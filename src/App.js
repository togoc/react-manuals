import React, { useState, useEffect } from 'react'
//Hook 是 React 16.8 的新增特性。
//它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
export default function App() {
    const [todos, setCount] = useState([
        {
            id: 0,
            title: '1'
        },
        {
            id: 1,
            title: '2'
        },
    ]);
    //就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
    //它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount
    // 具有相同的用途，只不过被合并成了一个 API。
    useEffect(() => {
        console.log('更新了')
    })
    return (
        <div>
            {
                todos.map(v => {
                    return <p key={v.id}>{v.title}</p>
                })
            }
            <button onClick={() => setCount([...todos, {
                id: Math.random(),
                title: '2'
            }])}>
                Click me
            </button>
        </div>
    );
}


