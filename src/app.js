import React from 'react';
import ReactDOM from 'react-dom';
const redux = require('redux')
import {Provider} from 'react-redux' //no la mot components
import Box from "./components/Box"

const App = () => (
    <div>
        <h2>App component</h2>
        <Box/>
    </div>
)
//dispath la thuc hien phai truyen vao mot cai action

const reducer = (state = {value: 0}, action) => {
    if(action.type === 'THEM') return {value: state.value + 1}
    if(action.type === 'BOT') return {value: state.value - 1}
    return state
}

const store = redux.createStore(reducer)

const state = store.getState()

console.log(state)

store.dispatch({type: 'THEM'})

console.log(store.getState())

store.dispatch({type: 'BOT'})

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, //no se tro thanh root components
    //neu co hai cai app thi dung the div de bao lai cai app
    
    document.getElementById('root')// eslint-disable-line
);
