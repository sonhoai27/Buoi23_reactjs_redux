import React from 'react';
import ReactDOM from 'react-dom';
const redux = require('redux')

const App = () => (
    <div>
        <h2>App component</h2>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

//dispath la thuc hien phai truyen vao mot cai action

const reducer = (state = 0, action) => {
    if(action.type === 'THEM') return state + 1
    return state
}

const store = redux.createStore(reducer)

const state = store.getState()

console.log(state)

store.dispatch({type: 'THEM'})

console.log(store.getState())