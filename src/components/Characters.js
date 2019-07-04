import React, { Component } from "react";
import axios from 'axios';

class Characters extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      error: ''
    }
  }
  componentDidMount() {
    axios
    .get('https://swapi.co/api/people/1/')
    .then(response => {
      console.log(response.data);
      this.setState({characters: response.data.results})
    }).catch(error => {
      this.setState({error: 'Something went wrong'})
    })
  }
  handleClick = () => {

  }
  render() {
    return (
    <div>
      <h1>Some random characters</h1>
      <button onClick={this.handleClick}>Get some characters</button>
      {this.state.characters.map(characters => (
        <div key={character.name}>{characters.name}</div>))}
    </div>
    )
  }
}

export default Characters;