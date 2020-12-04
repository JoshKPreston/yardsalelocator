
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAwXQvAvEyb72mSZCNXLB5_abiboWIGFmM',
  authDomain: 'yard-sale-locator-82b72.firebaseapp.com',
  databaseURL: 'https://yard-sale-locator-82b72.firebaseio.com',
  projectId: 'yard-sale-locator-82b72',
  storageBucket: 'yard-sale-locator-82b72.appspot.com',
  messagingSenderId: '495092526893',
  appId: '1:495092526893:web:4ac4c1e82a73a59bd16da4',
  measurementId: 'G-WVKHY78DGS'
}

firebase.initializeApp(firebaseConfig)
export const FirebaseAnalytics = firebase.analytics()
export const FirebaseStorage = firebase.storage()
