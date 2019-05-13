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
                {this.props.children}
            </div>
        )
    };
}

export default GameBox;