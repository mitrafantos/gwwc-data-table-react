import './App.css';
import DataTable from './DataTable'
import { useState, useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBe9RfBFcXjrGtQ7jVxtrxSOWhqf28DHYk",
    authDomain: "gwwc-data-table.firebaseapp.com",
    databaseURL: "https://gwwc-data-table.firebaseio.com",
    projectId: "gwwc-data-table",
    storageBucket: "gwwc-data-table.appspot.com",
    messagingSenderId: "924988001345",
    appId: "1:924988001345:web:655254cb48b7162b6f4ac0",
    measurementId: "G-TC4E5JES7F"
})

const database = firebase.database();

function App() {

  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
      database.ref('/organisations/').once('value').then((snapshot) => {
              setOrganisations(snapshot.val());
      });
  }, [])

  return (
    <div className="App">
      <DataTable organizations={organisations}></DataTable>
    </div>
  );
}

export default App;
