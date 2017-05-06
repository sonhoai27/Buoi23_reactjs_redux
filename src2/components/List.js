import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

class List extends Component {
    render() {
        return (
            <div>
              <NoteForm/>
                { this.props.mang1.map(e => 
                <Note content={e.content} key={e.id} id={e.id}/>
                ) }
            </div>
        );
    }
}

export default connect(state => ({mang1: state.mang}))(List)