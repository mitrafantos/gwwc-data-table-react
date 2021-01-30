import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase/app';
import App from './component/App';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
