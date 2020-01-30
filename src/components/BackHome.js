import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class BackHome extends Component {
    render() {
        console.log(this.props) //默认是没有history相关属性
        return (
            <button onClick={() => {
                this.props.history.push({
                    pathname: '/',
                    state: {

                    }
                })
            }}>Back Home</button>
        )
    }
}
export default withRouter(BackHome)