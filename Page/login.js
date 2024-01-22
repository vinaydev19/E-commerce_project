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
