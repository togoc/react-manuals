import React, { Component } from 'react'


const Another = (C) => {
    return class app extends Component {
        render() {
            return (
                <>
                    <C />
                    <p>Another</p>
                </>
            )
        }
    }
}
export default Another