import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
export default class TodoHeader extends Component {
    // 类内
    static propTypes = {
        name: PropTypes.string.isRequired,//强调类型和必须传入
        children: PropTypes.string.isRequired//强调类型和必须传入
    }

    render() {
        const { children, name } = this.props
        return (
            //可以使用空标签或者react里的Fragment(碎片)标签占位
            <>
                <h1>{children} {name}</h1>
            </>
        )
    }
}

//类外
// TodoHeader.propTypes = {
//     name: PropTypes.string.isRequired,//强调类型和必须传入
//     children: PropTypes.string.isRequired//强调类型和必须传入
// }
