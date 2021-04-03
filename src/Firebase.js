import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDz92HCiISfDYPip79Xia8ZPMbETOzgVmo",
  authDomain: "fir-494d2.firebaseapp.com",
  projectId: "fir-494d2",
  storageBucket: "fir-494d2.appspot.com",
  messagingSenderId: "403335437581",
  appId: "1:403335437581:web:248460811d516a2a7aa444",
  measurementId: "G-L4T3Q59R2M",
});

const auth = firebase.auth();
export { auth };
