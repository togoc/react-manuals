import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store'
console.log(store)
window.store = store

ReactDOM.render(
    <App store={store} />
    ,
    document.querySelector('#root')
)