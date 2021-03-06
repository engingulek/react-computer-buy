import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyANWAnao19TmZOD8D7_s5AWYbbHViiT8VI",
    authDomain: "glk-comp.firebaseapp.com",
    databaseURL: "https://glk-comp-default-rtdb.firebaseio.com",
    projectId: "glk-comp",
    storageBucket: "glk-comp.appspot.com",
    messagingSenderId: "1029640029494",
    appId: "1:1029640029494:web:d7fd51f58042cd2c4e1f97",
    measurementId: "G-GF61YPH1NR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const providerGoogle= new firebase.auth.GoogleAuthProvider();
  export {auth,providerGoogle};
  export default db;


