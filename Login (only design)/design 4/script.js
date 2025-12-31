(function () {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const pwd = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const pwdError = document.getElementById("pwdError");
  const status = document.getElementById("status");
  const toggle = document.getElementById("togglePwd");
  const demo = document.getElementById("demoBtn");

  toggle.addEventListener("click", () => {
    const t = pwd.type === "password" ? "text" : "password";
    pwd.type = t;
    toggle.textContent = t === "password" ? "Show" : "Hide";
  });

  demo.addEventListener("click", () => {
    email.value = "demo@example.com";
    pwd.value = "password123";
  });

  function validate() {
    let ok = true;
    emailError.textContent = "";
    pwdError.textContent = "";

    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      ok = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      emailError.textContent = "Please enter a valid email.";
      ok = false;
    }

    if (!pwd.value) {
      pwdError.textContent = "Password is required.";
      ok = false;
    } else if (pwd.value.length < 6) {
      pwdError.textContent = "Use at least 6 characters.";
      ok = false;
    }
    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    if (!validate()) return;

    // Simulate authentication (replace with real request)
    const data = { email: email.value.trim(), password: pwd.value };
    status.textContent = "Signing in...";

    setTimeout(() => {
      // fake success for demo@example.com / password123
      if (
        data.email === "demo@example.com" &&
        data.password === "password123"
      ) {
        status.textContent = "Signed in successfully — redirecting...";
        status.style.color = "";
      } else {
        status.textContent = "Invalid credentials. Try the Demo button.";
        status.style.color = "#b91c1c";
      }
    }, 800);
  });
})();
