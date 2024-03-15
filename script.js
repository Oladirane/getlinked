const dropdown = document.querySelectorAll(".faqboss");

dropdown.forEach((item) => {
  const ola = item.querySelector(".plus");
  const faq = item.querySelector(".faq1");
  const olad = item.querySelector(".faq");

  faq.addEventListener("click", () => {
    ola.classList.toggle("active");
    olad.classList.toggle("active");
  });
});
