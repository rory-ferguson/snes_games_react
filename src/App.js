import React, { Component } from 'react';
import GameBox from './components/GameBox';

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
                    <div>
                        <GameBox title={result.title} release={result.release} image={result.image}>

                        </GameBox>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default App;