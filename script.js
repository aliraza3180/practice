document.querySelector(".menuToggle").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");

  this.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const phone = document.getElementById("phone");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const phoneError = document.getElementById("phoneError");

  const successMessage = document.getElementById("successMessage");

  function validateFullName() {
    if (fullName.value.trim() === "") {
      fullName.classList.add("error");
      nameError.textContent = "Full Name is required.";
      return false;
    }
    fullName.classList.remove("error");
    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("error");
      emailError.textContent = "Enter a valid email address.";
      return false;
    }
    email.classList.remove("error");
    emailError.textContent = "";
    return true;
  }

  function validatePassword() {
    if (password.value.length < 8) {
      password.classList.add("error");
      passwordError.textContent = "Password must be at least 8 characters.";
      return false;
    }
    password.classList.remove("error");
    passwordError.textContent = "";
    return true;
  }

  function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add("error");
      confirmPasswordError.textContent = "Passwords do not match.";
      return false;
    }
    confirmPassword.classList.remove("error");
    confirmPasswordError.textContent = "";
    return true;
  }

  function validatePhone() {
    if (phone.value && !/^\d{3}-\d{3}-\d{4}$/.test(phone.value)) {
      phone.classList.add("error");
      phoneError.textContent =
        "Phone number must be in the format XXX-XXX-XXXX.";
      return false;
    }
    phone.classList.remove("error");
    phoneError.textContent = "";
    return true;
  }

  fullName.addEventListener("input", validateFullName);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);
  phone.addEventListener("input", validatePhone);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid =
      validateFullName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validatePhone();

    if (isValid) {
      successMessage.textContent = "Registration successful!";
      successMessage.style.color = "green";
      form.reset();
    } else {
      successMessage.textContent = "";
    }
  });
});
