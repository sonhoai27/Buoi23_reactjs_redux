import React, { Component } from 'react';
import {connect} from 'react-redux'
class Note extends Component {
    Xoa(){
      const {dispatch, id} = this.props
      dispatch({type: 'XOA', id}) //truyen vao id de ben reducer cho action no co the biet dc la actio.id la cai nao
    }
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={this.Xoa.bind(this)}>Xoa</button>
            </div>
        );
    }
}
export default connect()(Note);