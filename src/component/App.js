import './App.css';
import DataTable from './DataTable'
import { useState, useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function App() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    database.ref('/organisations/').once('value').then((snapshot) => {
      setOrganizations(snapshot.val());
    });
  }, [])

  return (
    <div className="App">
      <DataTable organizations={organizations}></DataTable>
    </div>
  );
}

export default App;
