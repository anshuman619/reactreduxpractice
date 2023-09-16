import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redux code
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./services/reducers/rootReducer";
const store=createStore(rootReducer)
// console.warn("store data: ",store);
// 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <App />
  </Provider>
);
