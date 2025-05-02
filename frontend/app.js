// Import Firebase (via CDN modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4rUpC-Y7m1hGwKydLjTN4hnH4PUejF-0",
  authDomain: "paymentloo.firebaseapp.com",
  projectId: "paymentloo",
  storageBucket: "paymentloo.firebasestorage.app",
  messagingSenderId: "678382986235",
  appId: "1:678382986235:web:14d671959c28ec800a215e",
  measurementId: "G-33XCH79XP2"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// 👉 Register User
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registered successfully!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 👉 Login User
function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 👉 Save Debtor
function saveDebtor(userId, debtorData) {
  const debtorRef = ref(database, `users/${userId}/debtors`);
  push(debtorRef, debtorData);
}

// 🧾 Register Form Handler
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  registerUser(email, password);
});

// 🧾 Login Form Handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  loginUser(email, password);
});

// 🧾 Add Debtor Form Handler
document.getElementById("debtorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("debtorName").value;
  const phone = document.getElementById("debtorPhone").value;
  const amount = parseInt(document.getElementById("debtorAmount").value);
  const dueDate = document.getElementById("dueDate").value;

  const user = auth.currentUser;
  if (user) {
    const debtorData = { name, phone, amount, dueDate };
    saveDebtor(user.uid, debtorData);
    alert("Debtor added successfully!");
  } else {
    alert("Please log in first.");
  }
});
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(error => alert(error.message));
}
