import firebase from 'firebase';


const firebaseConfig = {
     apiKey: "AIzaSyAmM9zd3wfoRuZS9KusJo48kfXKsfvBdh4",
     authDomain: "whats-app-clone-e44d0.firebaseapp.com",
     databaseURL: "https://whats-app-clone-e44d0.firebaseio.com",
     projectId: "whats-app-clone-e44d0",
     storageBucket: "whats-app-clone-e44d0.appspot.com",
     messagingSenderId: "547962509042",
     appId: "1:547962509042:web:e7844d8ce30b7adc50626b",
     measurementId: "G-6PTQT83D8J"
   };



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
