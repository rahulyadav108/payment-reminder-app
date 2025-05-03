// app.js

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4rUpC-Y7m1hGwKydLjTN4hnH4PUejF-0",
  authDomain: "paymentloo.firebaseapp.com",
  databaseURL: "https://paymentloo-default-rtdb.firebaseio.com",
  projectId: "paymentloo",
  storageBucket: "paymentloo.firebasestorage.app",
  messagingSenderId: "678382986235",
  appId: "1:678382986235:web:14d671959c28ec800a215e",
  measurementId: "G-33XCH79XP2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login with email & password
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}

// Register with email & password
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Registration failed: " + error.message);
    });
}

// Google Sign-In
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Google Sign-In failed: " + error.message);
    });
}

// Logout
function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = "index.html";
    });
}
