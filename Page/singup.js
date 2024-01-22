// narbar js code

const OpenBtn = document.querySelector("#OpenBtn");
const Mobilebar = document.querySelector("#Mobilebar");

function openMenu() {
  Mobilebar.classList.toggle("show_menu");
}

OpenBtn.addEventListener("click", () => {
  openMenu();
});

// add to cart js code
const AddtoCart = document.getElementById("AddtoCart");
const openAddtoCart = document.getElementById("openAddtoCart");
const OpenCloesAddtocart = document.getElementById("OpenCloesAddtocart");
const MobileopenAddtoCart = document.getElementById("MobileopenAddtoCart");

MobileopenAddtoCart.addEventListener("click", () => {
  AddtoCart.classList.add("show_Cart");
});

openAddtoCart.addEventListener("click", () => {
  AddtoCart.classList.add("show_Cart");
});
OpenCloesAddtocart.addEventListener("click", () => {
  AddtoCart.classList.remove("show_Cart");
});

function ValidationFullName() {
  const FullName = document.getElementById("FullName").value;
  console.log(FullName.length);
  if (FullName.length == 0) {
    document.getElementById(
      "FullName_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    return false;
  }
  if (!FullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    document.getElementById(
      "FullName_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    return false;
  }
  document.getElementById(
    "FullName_error"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  document.getElementById("FullName_error").style.color = "green";
  return true;
}

function ValidationUsername() {
  const username = document.getElementById("username").value;
  // console.log(FullName.length);
  if (username.length == 0) {
    document.getElementById(
      "username_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    document.getElementById("username_error").style.color = "red";
    return false;
  }
  document.getElementById(
    "username_error"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  document.getElementById("username_error").style.color = "green";
  return true;
}

function ValidationEmail() {
  const email = document.getElementById("email").value;
  // console.log(FullName.length);
  if (email.length == 0) {
    document.getElementById(
      "email_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    document.getElementById("email_error").style.color = "red";
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    document.getElementById(
      "email_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    return false;
  }
  document.getElementById(
    "email_error"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  document.getElementById("email_error").style.color = "green";
  return true;
}

function ValidationPassword() {
  const password = document.getElementById("password").value;
  // console.log(FullName.length);
  if (password.length == 0) {
    document.getElementById(
      "password_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    return false;
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    document.getElementById(
      "password_error"
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    return false;
  }
  document.getElementById(
    "password_error"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  document.getElementById("password_error").style.color = "green";
  return true;
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
