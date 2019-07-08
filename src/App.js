import React, { Component } from 'react';
import GameBox from './components/GameBox';
import { Form, Button, Col, Row } from "react-bootstrap";
import './App.css'


class App extends Component {
    constructor() {
        super();
        this.state = {
            result: [],
            publishers: [],
            developers: [],
            release: [],
            title: [],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/title')
            .then(data => data.json())
            .then((data) => {
                this.setState({ title: data })
            })

        fetch('http://127.0.0.1:8000/publishers')
            .then(data => data.json())
            .then((data) => {
                this.setState({ publishers: data })
            })

        fetch('http://127.0.0.1:8000/developers')
            .then(data => data.json())
            .then((data) => {
                this.setState({ developers: data })
            })

        fetch('http://127.0.0.1:8000/release')
            .then(data => data.json())
            .then((data) => {
                this.setState({ release: data })
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
        data['title'] = form[0].value
        data['publisher'] = form[1].value
        data['developer'] = form[2].value
        data['release'] = form[3].value
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
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ margin: "2rem auto 1rem" }}>Snes Games List</h1>
                    <p>Released Super Nintendo (European PAL) Games</p>
                </div>
                <div>
                    <Form onSubmit={this.handleSubmit} class="col-sm-10">
                        <Col sm={{ span: 8, offset: 2 }}> 
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Row>
                                    <Col sm="4">
                                            <Form.Label>Title</Form.Label>   
                                            <Form.Control as="select">
                                                <option></option>
                                                {this.state.title.map((title, index) => (
                                                    <option>{title}</option>
                                                ))}
                                            </Form.Control>
                                    </Col>
                                    <Col sm="4">
                                            <Form.Label>Publisher</Form.Label>
                                            <Form.Control as="select">
                                                <option></option>
                                                {this.state.publishers.map((publishers, index) => (
                                                    <option>{publishers}</option>
                                                ))}
                                            </Form.Control>
                                    </Col>
                                    <Col sm="4">
                                        <div>
                                            <Form.Label>Developers</Form.Label>
                                            <Form.Control as="select">
                                                <option></option>
                                                {this.state.developers.map((developers, index) => (
                                                    <option>{developers}</option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    </Col>
                                    <Col sm="4">
                                        <div>
                                            <Form.Label>Release Year</Form.Label>
                                            <Form.Control as="select">
                                                <option></option>
                                                {this.state.release.map((release, index) => (
                                                    <option>{release}</option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        <Col sm={{ span: 8, offset: 2 }} style={{textAlign: "center"}}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Form>
                </div>
                
                {/* <h1>My Results</h1> */}
                <div class="results-container">
                    {this.state.result.map((result) => (
                        <div>
                            <GameBox title={result.title} publisher={result.publisher} developer={result.developer} release={result.release} image={result.image}></GameBox>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App;