import React, { Component } from 'react';
import GameBox from './components/GameBox';
import { Form, Button } from "react-bootstrap";

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: [],
            publishers: [],
            developers: [],
            release: [],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/publishers')
            .then(data => data.json())
            .then((data) => {
                this.setState({ publishers: data })
            })

        fetch('http://127.0.0.1:8000/release')
            .then(data => data.json())
            .then((data) => {
                this.setState({ release: data })
            })

        fetch('http://127.0.0.1:8000/developers')
            .then(data => data.json())
            .then((data) => {
                this.setState({ developers: data })
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

        const data = {};
        data['publisher'] = form[0].value
        data['developer'] = form[1].value
        data['release'] = form[2].value
        const querystring = encodeQueryData(data);

        var url = 'http://127.0.0.1:8000/games/?' + querystring
        
        function encodeQueryData(data) {
            const ret = [];
            for (let d in data)
              ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return ret.join('&');
        }

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
                            <div>
                                <Form.Label>Publisher</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    {this.state.publishers.map((publishers, index) => (
                                        <option>{publishers}</option>
                                    ))}
                                </Form.Control>
                            </div>
                            <div>
                                <Form.Label>Developers</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    {this.state.developers.map((developers, index) => (
                                        <option>{developers}</option>
                                    ))}
                                </Form.Control>
                            </div>
                            <div>
                                <Form.Label>Release Year</Form.Label>
                                <Form.Control as="select">
                                    <option></option>
                                    {this.state.release.map((release, index) => (
                                        <option>{release}</option>
                                    ))}
                                </Form.Control>
                            </div>
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