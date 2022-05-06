import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = { name: '', type: '', values: [] }
        this.getData()
    }
    async getData() {
        let res = await axios.get('https://assettrackerappapi.azurewebsites.net/')
        this.setState({ name: res.data.data.name, type: res.data.data.type })
        console.log(res.data)
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.type}</h2>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))