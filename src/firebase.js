import firebase from 'firebase'
import firebaseConfig from './config.json'

firebase.initializeApp(firebaseConfig);

export default firebase;