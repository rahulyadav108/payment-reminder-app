// script.js

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const emailDisplay = document.getElementById("user-email");
    if (emailDisplay) {
      emailDisplay.innerText = `👤 Logged in as: ${user.email}`;
    }
  } else {
    // Not logged in, redirect to login
    window.location.href = "index.html";
  }
});
