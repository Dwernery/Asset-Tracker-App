import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const apiReq = async function () {
    let res = await axios.get('https://assettrackerappapi.azurewebsites.net/')
    return res.data
}

const App = () => {
    return (
        <h1>{apiReq()}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))