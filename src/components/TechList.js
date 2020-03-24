import React, { Component } from 'react'

class TechList extends Component {

  state = {
    //todo estado no react é imutavel, nao pode ser alterado direramente
    //informações que podem ser manipuladas
    newTechs: '',
    techs: [
      'node.js',
      'react.js',
      'reactNativer',
    ]
  };

  handleInputChange = e => {
    this.setState({ newTechs: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTechs],
      newTechs: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTechs}
        />
        <button type="submit">enviar</button>
      </form>
    )
  }
}

export default TechList;
