import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA7xSppkaIt1CLqaJAGpw3pI2BCMWnFO7A",
  authDomain: "pests-4610a.firebaseapp.com",
  databaseURL: "https://pests-4610a.firebaseio.com",
  projectId: "pests-4610a",
  storageBucket: "pests-4610a.appspot.com",
  messagingSenderId: "993928728545",
  appId: "1:993928728545:web:fad3da57d8028dd75d0ca0",
  measurementId: "G-5CXE0K28HJ"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;