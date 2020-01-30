import React, { Component } from 'react'
import ArticalDetail from '../ArticalDetail'
import { Route, Link } from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            <div>
                <Link to="/artical/1">文章1</Link>
                <Link to="/artical/2">文章2</Link>
                {/* <Route component={ArticalDetail} path="/artical/:id" /> */}
            </div>
        )
    }
}
