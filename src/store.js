import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
import notifyReducer from "./reducers/notifyReducer";

var firebaseConfig = {
  apiKey: "AIzaSyBqyLKGfSDU2-eXcwBuUFw1EYYTEsMCmN0",
  authDomain: "connect-the-x.firebaseapp.com",
  databaseURL: "https://connect-the-x.firebaseio.com",
  projectId: "connect-the-x",
  storageBucket: "connect-the-x.appspot.com",
  messagingSenderId: "401012072513",
  appId: "1:401012072513:web:300f9955d54ad898"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Init Firestore
firebase.firestore();

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
