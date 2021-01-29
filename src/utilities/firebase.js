import firebase from 'firebase/app';
import 'firebase/database';

export default function getData(setData) {
  const database = firebase.database();
  database.ref('/organisations/').once('value').then((snapshot) => {
    setData(snapshot.val());
  });
}
