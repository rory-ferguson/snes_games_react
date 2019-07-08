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
    width: 300px;
    height: auto;
`
const GameBoxH3 = styled.h3`
    margin-top: 0.5rem;
`

class GameBox extends Component {
    render() {
        return (
            <GameBoxContainer>
                <GameBoxImage src={this.props.image} alt="" />
                <GameBoxH3>{this.props.title}</GameBoxH3>
                <p>{this.props.publisher} / {this.props.developer}</p>
                <p>Release Date: {this.props.release}</p>
            </GameBoxContainer>
        )
    };
}

export default GameBox;