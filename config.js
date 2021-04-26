import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCUAOiuXW3k6bkRVj4cqQV8Db6Y85sS_og",
  authDomain: "quiz-buzzer-2008.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-2008-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-2008",
  storageBucket: "quiz-buzzer-2008.appspot.com",
  messagingSenderId: "548410400154",
  appId: "1:548410400154:web:d82c579cdcccac7a156e23"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
