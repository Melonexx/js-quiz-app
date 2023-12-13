// phew… not a lot going on here. Please add some code!
const header = document.querySelector('[data-js="bookmark"]');

header.addEventListener("click", () => {
  header.classList.toggle("bookmark--active");
});
