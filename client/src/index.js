import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const apiReq = async function () {
    let res = await axios.get('https://assettrackerappapi.azurewebsites.net/')
    return res.data
}

class App extends React.Component {
    constructor() {
        super()
        this.state = { response: '' }
        this.getData()
    }
    async getData() {
        const res = await apiReq()
        this.setState({ response: res.data })
    }

    render() {
        return (
            <h1>{this.state.response}</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))