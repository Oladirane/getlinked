// const dropdown = document.querySelectorAll(".faqboss");

// dropdown.forEach((item) => {
//   const ola = item.querySelector(".plus");
//   const olad = item.querySelector(".faq");

//   ola.addEventListener("click", () => {
//     ola.classList.toggle("active");
//     olad.classList.toggle("active");
//   });
// });

// function removeplus() {
//   plusin.classList.toggle("active");
//   dropdown.classList.toggle("active");
// }

// plusin.addEventListener("click", removeplus);

// const plusin = document.querySelectorAll(".plus");
// const dropdown = document.querySelectorAll(".faq");

// function removeplus() {
//   plusin.classList.toggle("active");
//   dropdown.classList.toggle("active");
// }

// plusin.forEach((item) => item.addEventListener("click", removeplus));

const faqitems = document.querySelectorAll(".faqboss");

faqitems.forEach((item) => {
  const togglebutton = item.querySelector(".plus");
  const answer = item.querySelector(".faq");

  togglebutton.addEventListener("click", () => {
    togglebutton.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
