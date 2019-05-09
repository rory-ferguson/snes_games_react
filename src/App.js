import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/games')
            .then(data => data.json())
            .then((data) => {
                this.setState({ result: data })
                console.log(this.state.result)
            })
            .catch(console.log);
    }
    render() {
        
        return (
            <div>
                <h1>My Results</h1>
                <div class="results-container">
                {this.state.result.map((result) => (
                    <h3>{result.title}</h3>
                ))}
                </div>
            </div>
        )
    }
}

export default App;