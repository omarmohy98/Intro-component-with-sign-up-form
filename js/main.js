let form = document.forms[0];
let inputFeilds = document.querySelectorAll(".input");
let emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function checkEmpty(ele) {
  if (ele.value.trim() === "") {
    ele.nextElementSibling.innerHTML = `${ele.getAttribute(
      "placeholder"
    )} cannot be empty`;
    ele.nextElementSibling.style.display = "flex";
    ele.nextElementSibling.nextElementSibling.style.display = "inline";
  } else {
    ele.nextElementSibling.innerHTML = "";
    ele.nextElementSibling.style.display = "none";
    ele.nextElementSibling.nextElementSibling.style.display = "none";
  }
}

function checkEmailValid() {
  if (emailCheck.test(inputFeilds[2].value)) {
    inputFeilds[2].nextElementSibling.innerHTML = "";
    inputFeilds[2].nextElementSibling.style.display = "none";
    inputFeilds[2].nextElementSibling.nextElementSibling.style.display = "none";
  } else {
    inputFeilds[2].nextElementSibling.innerHTML =
      "Looks like this is not an email";
    inputFeilds[2].nextElementSibling.style.display = "flex";
    inputFeilds[2].nextElementSibling.nextElementSibling.style.display =
      "inline";
  }
}

form.addEventListener("submit", (eve) => {
  inputFeilds.forEach((ele) => {
    checkEmpty(ele);
  });
  let formvalid = [...inputFeilds].every((ele) => {
    return ele.value !== "";
  });
  if (!formvalid) {
    eve.preventDefault();
  }
});

inputFeilds[2].addEventListener("input", checkEmailValid);
inputFeilds[0].addEventListener("input", (eve) => {
  checkEmpty(eve.target);
});
inputFeilds[1].addEventListener("input", (eve) => {
  checkEmpty(eve.target);
});
inputFeilds[3].addEventListener("input", (eve) => {
  checkEmpty(eve.target);
});
