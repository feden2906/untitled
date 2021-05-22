import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "INC100": {
            return {
                ...state,
                counter: state.counter + 100
            }
        }
        case "DEC100": {
            return {
                ...state,
                counter: state.counter - 100
            }
        }
        case "RESET": {
            return {
                ...state,
                counter: state.counter = 0
            }
        }
        default:
            return state
    }
}

const store = createStore(reducer)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>              {/* Гарною практикою є огортання всієї апки в Router */}
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
