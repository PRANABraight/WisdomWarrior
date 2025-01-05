// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {  getAuth,  createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB2Pj7lsXQw0Ld24HmMEluh-JyeScmxqu8",
    authDomain: "wisdomwarrior-46ef7.firebaseapp.com",
    databaseURL: "https://wisdomwarrior-46ef7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wisdomwarrior-46ef7",
    storageBucket: "wisdomwarrior-46ef7.firebasestorage.app",
    messagingSenderId: "287593660670",
    appId: "1:287593660670:web:a283ba3c48dbbfd0da25af"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert(`Error: ${errorMessage}`);
    });
});
