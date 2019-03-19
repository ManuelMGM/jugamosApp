import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAQwmGLNTINvk1Pfr-CEPx82SWzY4R6Nzk",
  authDomain: "prueba-42073.firebaseapp.com",
  databaseURL: "https://prueba-42073.firebaseio.com",
  projectId: "prueba-42073",
  storageBucket: "prueba-42073.appspot.com",
  messagingSenderId: "980451123873"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
