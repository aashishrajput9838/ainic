// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjKmCJqxJwKOoh9ua_ipSBphakMEyw5Cg",
  authDomain: "ainic-d525e.firebaseapp.com",
  projectId: "ainic-d525e",
  storageBucket: "ainic-d525e.firebasestorage.app",
  messagingSenderId: "986418030839",
  appId: "1:986418030839:web:a396607eb2f5c09d3a4bf2",
  measurementId: "G-BLX05VP288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Only initialize analytics on the client side
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics, auth };