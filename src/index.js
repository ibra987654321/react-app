import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";

// addPost('sdlfjlskd')
let rerenderEntireTree = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={store.getData()} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTree(store.getData());

store.suscriber(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
