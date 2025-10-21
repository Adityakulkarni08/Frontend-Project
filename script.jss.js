document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function() {
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();

    if (!email || !pass) {
      alert("Please fill all fields.");
      return;
    }

    if(email === "admin@travelx.com" && pass === "admin") {
      alert("Login Successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
      alert("Invalid email or password");
    }
  });
});
