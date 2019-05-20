import React, { Component } from 'react';
import styled from 'styled-components'


const GameBoxContainer = styled.div`
    background-color: whitesmoke;
    padding: 20px;
    text-align: center;
    margin: 20px;
    border-radius: 5px;
`
const GameBoxImage = styled.img`
    width: 200px;
    height: auto;
`

class GameBox extends Component {
    render() {
        return (
            <GameBoxContainer>
                <GameBoxImage src={this.props.image} alt="" />
                <h3>{this.props.title}</h3>
                <p>Release Date: {this.props.release}</p>
            </GameBoxContainer>
        )
    };
}

export default GameBox;