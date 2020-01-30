import React, { Component } from 'react'
import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'
import {
    Artical,
    User,
    Home,
    ArticalDetail,
    NotFound,
    Login
} from './pages'

export default class App extends Component {
    state = {
        name: 'togoc'
    }
    render() {

        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/artical">文章</Link></li>
                    <li><Link to="/user">用户</Link></li>
                </ul>
                <Route render={(RouteProps) => {
                    //可以通过render方法传值
                    //可以判断是否登录返回页面
                    if (!true)
                        return <Redirect to="/login" />
                }} path="/" />
                <Switch>
                    {/* <Route render={Routeprops => <Login {...Routeprops} name={this.state.name} />} /> */}
                    <Route component={Home} path="/home" />
                    <Route component={Artical} path="/artical" exact />
                    <Route component={ArticalDetail} path="/artical/:id" />
                    <Route component={User} path="/user" />
                    <Route component={NotFound} path="/404" />
                    <Route component={Login} path="/login" />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}
/**
 * Switch: 每个路由都是一个case 匹配后直接break, 不然会全部渲染再选择
 * exact : 完全匹配, 比如说 path="/artical" 会匹配(占用)  path="/artical/:id" 使后者显示不出, 加exact可解决
 * render : 传值
 */