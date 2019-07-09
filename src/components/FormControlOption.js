import React, { Component } from 'react';
import { Form, } from "react-bootstrap";


class FormControlOption extends Component {
    render() {
        return (
            <div>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control as="select">
                    <option></option>
                    {this.props.title.map((title, index) => (
                        <option>{title}</option>
                    ))}
                </Form.Control>
            </div>
        )
    };
}

export default FormControlOption;