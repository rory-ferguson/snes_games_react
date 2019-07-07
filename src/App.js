import React, { Component } from 'react';
import GameBox from './components/GameBox';
import { Form, Button } from "react-bootstrap";

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: [],
            publishers: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/publishers')
            .then(data => data.json())
            .then((data) => {
                this.setState({ publishers: data })
            })

        fetch('http://127.0.0.1:8000/games')
            .then(data => data.json())
            .then((data) => {
                this.setState({ result: data })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form[0].value)
        var publisher = form[0].value
        var url = 'http://127.0.0.1:8000/games/?publisher=' + publisher
        fetch(url)
            .then(data => data.json())
            .then((data) => {
                this.setState({ result: data })
            })
    }

    render() {
        
        return (
            <div>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control as="select">
                                {this.state.publishers.map((publishers, index) => (
                                    <option>{publishers}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                
                <h1>My Results</h1>
                <div class="results-container">
                {this.state.result.map((result) => (
                    <div>
                        <GameBox title={result.title} release={result.release} image={result.image}></GameBox>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default App;