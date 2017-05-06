import React, { Component } from 'react';
import {connect} from 'react-redux'
class NoteForm extends Component{
  Them(e){
    e.preventDefault()
   const {txtContent, txtId} = this.refs
   const {dispatch} = this.props
   const item = {id: txtId.value, content: txtContent.value}
   dispatch({type: 'THEM', item})

  }
  render() {
    return (
      <div>
        <form>
          <input type ="text" placeholder="type to note..." ref="txtContent"/>
          <input type ="text" placeholder="type to note..." ref="txtId"/>
          <button onClick={this.Them.bind(this)}>Tạo</button>
        </form>
      </div>
    )
  }
}
export default connect()(NoteForm);