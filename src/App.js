import React, { Component } from 'react'
import WithCopyRight from './WithCopyRight'
import Another from './Another'

@WithCopyRight
@Another
class App extends Component {
    render() {
        return (
            <>
                App
            </>
        )
    }
}

export default App