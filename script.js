import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Register Function
window.register = function () {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
};

// Login Function
window.login = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert("Login failed: " + error.message));
};

// Google Login
window.loginWithGoogle = function () {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert("Google Sign-In failed: " + error.message));
};

// Dashboard auth check
if (window.location.pathname.includes("dashboard.html")) {
  onAuthStateChanged(auth, user => {
    if (user) {
      document.getElementById("user-email").innerText = user.email;
    } else {
      window.location.href = "index.html";
    }
  });
}

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
