import React, { Component } from 'react';
export default class Box extends Component{
  constructor(props){
    super(props);
    this.state = {value: 0}
  }

  Them(){
    this.setState({
      value: this.state.value + 1
    })
  }

  Bot(){
   this.setState({
     value: this.state.value - 1
    })
  }

  render(){
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick= {this.Them.bind(this)}>Them</button>
        <button onClick={this.Bot.bind(this)}>Bot</button>
      </div>
    )
  }
}