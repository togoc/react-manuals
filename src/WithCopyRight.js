import React, { Component } from 'react'

const app = (App) => {
    return class WithCopyRight extends Component {
        render() {
            return (
                <>
                    <App />
                    <p>@copy</p>
                </>
            )
        }
    }
}

export default app