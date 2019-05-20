import React, { Component } from 'react';

let gameBoxStyles = {
    'background-color': 'whitesmoke',
    'padding': '20px',
    'text-align': 'center',
    'margin': '20px',
    'border-radius': '5px',
}

class GameBox extends Component {
    render() {
        return (
            <div style={gameBoxStyles}>
                
                <img src={this.props.image} width="200" height="auto" alt="" />
                <h3>{this.props.title}</h3>
                <p>Release Date: {this.props.release}</p>
            </div>
        )
    };
}

export default GameBox;