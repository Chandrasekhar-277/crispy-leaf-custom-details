function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  // demo credentials (later moved to Firebase)
  if (user === "admin" && pass === "admin123") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}

function checkAuth() {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}
