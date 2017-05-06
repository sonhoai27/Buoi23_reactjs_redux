import React, { Component } from 'react';
import {connect} from 'react-redux'


class Box extends Component{
  constructor(props){
    super(props);
    this.state = {value: 0}
  }

  Them(){
    // this.setState({
    //   value: this.state.value + 1
    // })
    const {dispatch} = this.props
    dispatch({type: 'THEM'})
  }

  Bot(){
  //  this.setState({
  //    value: this.state.value - 1
  //   })
  const {dispatch} = this.props
    dispatch({type: 'BOT'})
  }

  render(){
    return (
      <div>
        <h2>{this.props.vl}</h2>
        <button onClick= {this.Them.bind(this)}>Them</button>
        <button onClick={this.Bot.bind(this)}>Bot</button>
      </div>
    )
  }
}

//trong connect: state la cai store
export default connect(state => ({vl: state.value}))(Box) //tra va mot cai object, luc nay thi cai value cua cai redux ben app la props