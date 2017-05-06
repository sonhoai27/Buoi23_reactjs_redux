import React, { Component } from 'react';
import {connect} from 'react-redux'

const styles = {
  them: {
    background: 'yellow',
    color: 'white',
     border: 0,
     borderRadius: 8,
      paddingLeft: 10
  },
  ThemId: {
    background: '#000000',
    color: 'white',
    border: 0,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
}

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
          <input type ="text" placeholder="type to note..." ref="txtContent" style={styles.them}/>
          <br/>
          <input type ="text" placeholder="type to note..." ref="txtId" style={styles.ThemId}/>
          <br/>
          <button onClick={this.Them.bind(this)}>Tạo</button>
        </form>
      </div>
    )
  }
}
export default connect()(NoteForm);