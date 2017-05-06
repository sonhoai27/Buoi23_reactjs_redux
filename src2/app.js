import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';

import {Provider}  from 'react-redux'

const redux = require('redux')

const App = () => (
    <div>
        <h2>App component redux</h2>
        <List />
    </div>
);

const defaultState = {
  mang: [
    {id : 1, content: 'Reactjs'},
    {id : 2, content: 'Android'},
    {id : 3, content: 'PHP'},
    {id : 4, content: 'React Native'},
    {id : 5, content: 'Nodejs'},
  ]
}

const reducer = (state = defaultState, action) => {
  if(action.type === 'XOA') {
    return {mang: state.mang.filter(e => e.id !== action.id)}
  }
  if(action.type === 'THEM') {
    return {mang: state.mang.concat(action.item)}
  }
  return state
}

const store = redux.createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('home')// eslint-disable-line
);
