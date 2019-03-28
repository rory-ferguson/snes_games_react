import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ''
        }
    }

    componentDidMount() {
        const data = fetch('http://127.0.0.1:8000/')
            .then((data) => data.json())
            .then((res) => res)
            .then(data => {
                this.setState({ result: data })
            });
    }
    render() {
        console.log(this.state.result)
        return (
            <div>
                <h2>{this.state.result.users}</h2>
            </div>
        )
    }
}

export default App;