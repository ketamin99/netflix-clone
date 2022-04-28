import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwoNkVM4TXpwS_n-ddcJCgw6TgcAQAUpc",
  authDomain: "netflix-clone-tmdb-api-65534.firebaseapp.com",
  projectId: "netflix-clone-tmdb-api-65534",
  storageBucket: "netflix-clone-tmdb-api-65534.appspot.com",
  messagingSenderId: "207351142203",
  appId: "1:207351142203:web:7ac5d23ca4d87e2435091e",
  measurementId: "G-HB5VNXW2NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { auth }
