import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const pictures = [
  {
  pic: './images/bee.jpg',
  label: 'A bee and flower'
  },
  {
  pic: './images/cascade.jpg',
  label: 'A cascade of flowers'
  },
  {
  pic: './images/fern.jpg',
  label: 'Fern on wall'
  },
  {
  pic: './images/ivy.jpg',
  label: 'Some ivy'
  },
  {
  pic: './images/yew.jpg',
  label: 'Some yew'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App pictures = {pictures}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
