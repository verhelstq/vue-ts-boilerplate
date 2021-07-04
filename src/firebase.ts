import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/functions'

const config = {
  apiKey: "AIzaSyChFIR0-iw3eLh6gyKxB65Y0Whw-py1Mks",
  authDomain: "watchjs-9f03f.firebaseapp.com",
  databaseURL: "https://watchjs-9f03f.firebaseio.com",
  projectId: "watchjs-9f03f",
  storageBucket: "watchjs-9f03f.appspot.com",
  appId: "1:708518855214:web:6cace094f4c7e2a83cd5bf",
  measurementId: "G-FB6NBQBENP",
};


firebase.default.initializeApp(config);

firebase.default.analytics();
firebase.default.performance();

const firestore = firebase.default.firestore
const auth = firebase.default.auth
const storage = firebase.default.storage
const app = firebase.default.app;
const functions = firebase.default.app().functions('europe-west1')

export {
  firestore,
  storage,
  auth,
  app,
  functions
}