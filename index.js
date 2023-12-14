const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const card = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  card.classList.toggle("hidden");

  if (answerButton.textContent === "Hide Answer") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
