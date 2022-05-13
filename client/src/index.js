import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = { message: '' }
        this.getData()
    }
    async getData() {
        let res = await axios.get('https://assettrackerappapi.azurewebsites.net/')
        this.setState({ message: res.data.message })
        console.log(res.data)
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))