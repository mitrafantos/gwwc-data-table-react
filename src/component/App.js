import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

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

const firestore = firebase.firestore();

function App() {

  return (
    <div className="App">
      <p>here's the data table:</p>
      <DataTable></DataTable>
    </div>
  );
}

function DataTable() {
    const organisationsRef = firestore.collection('organisations')
    const query = organisationsRef.orderBy('Full Name').limit(25)
    const organisations = useCollectionData(query, { idField: 'id' })

    return (
      <div className="DataTable">
      <p>here are all the variables:</p>
      <p>{organisations.map(organisation => <div>{organisation}</div>)}</p>
      </div>
    )
}


export default App;
