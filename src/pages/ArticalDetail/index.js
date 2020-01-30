import React, { Component } from 'react'
import BackHome from '../../components/BackHome'
export default class ArticalDetail extends Component {
    render() {
        console.log(this.props.history)
        return (
            <div>
                <button onClick={() => {
                    // this.props.history.push('/')//可以返回
                    this.props.history.push({
                        pathname: '/',
                        state: {

                        }
                    })
                    this.props.history.replace('/')//无法返回
                }}>返回首页</button>
                <BackHome />
                ArticalDetail {this.props.match.params.id}
            </div>
        )
    }
}
