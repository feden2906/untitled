import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST": {
            return {
                ...state,
                todos: action.payload
            }
        }
        case "MARKET_COMPLETED": {
            return {
                ...state,
                todos: state.todos
            }
        }
        case "REMOVE": {
            return {
                ...state,
                todos: state.todos
            }
        }
        default:
            return state
    }
}

const store = createStore(reducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
