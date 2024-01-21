const password = document.querySelector("#password"),
  passwordShowHide = document.querySelector(".password-show-hide"),
  passwordIcon = passwordShowHide.querySelector("i");

passwordShowHide.addEventListener("click", togglePassword);

function togglePassword() {
  if (password.type === "text") {
    // change password type text to password
    password.type = "password";
    // change eye icon
    passwordIcon.classList.remove("bx-show");
    passwordIcon.classList.add("bx-hide");
  } else {
    // change password type password to text
    password.type = "text";
    // change eye icon
    passwordIcon.classList.remove("bx-hide");
    passwordIcon.classList.add("bx-show");
  }
}
