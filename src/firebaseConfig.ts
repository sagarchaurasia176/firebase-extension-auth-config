// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import for authentication
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAPJDieh6HGhJHmlWpi8eoKEJ7KhFdTng",
  authDomain: "tc-exten.firebaseapp.com",
  projectId: "tc-exten",
  storageBucket: "tc-exten.firebasestorage.app",
  messagingSenderId: "241939040487",
  appId: "1:241939040487:web:dd6795cb89ec72f8db3a42",
  measurementId: "G-S3E6DZ6XPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Authentication
export { app, auth};  // Export for usage in other files
