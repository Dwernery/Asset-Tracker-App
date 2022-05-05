import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <h1>React Rendered and only built from Client path!!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))