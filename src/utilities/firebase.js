import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function getData(setData) {
    database.ref('/organisations/').once('value').then((snapshot) => {
        setData(snapshot.val());
      });
}

export default getData;