import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import App from './App'

// import { Route, NavLink as Link, Switch } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
       
        <Route component={App} path="/" />
    </HashRouter>
    ,
    document.querySelector('#root')
)