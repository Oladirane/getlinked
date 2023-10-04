const plusin = document.querySelector(".plus");
const dropdown = document.querySelector(".faq");

function removeplus() {
  plusin.classList.toggle("active");
  dropdown.classList.toggle("active");
}

plusin.addEventListener("click", removeplus);

// const plusin = document.querySelectorAll(".plus");
// const dropdown = document.querySelectorAll(".faq");

// function removeplus() {
//   plusin.classList.toggle("active");
//   dropdown.classList.toggle("active");
// }

// plusin.forEach((item) => item.addEventListener("click", removeplus));
