const answer = Math.floor(Math.random() * 10) + 1;
const userInput = document.getElementById("user-input");
const guessBtn = document.getElementById("guess-button");
const display = document.getElementById("user-display");

const cashPrizes = ["$300", "$500", "$1,000", "$5,000", "$10,000"];
const cashPrizeIndex = Math.floor(Math.random() * 5);
const cashPrize = cashPrizes[cashPrizeIndex];
let attempts = 3;

function giveAnswer() {
  const currentGuess = userInput.value;
  let html = ``;
  if (currentGuess != answer) {
    attempts--;
    if (attempts > 0) {
      html = `
      <h2 class="incorrect-ans">INCORRECT!</h2><br>
      <p>You have ${attempts} more ${attempts == 1 ? "guess" : "guesses"}.</p>
      <p>Please try again...</p>`;
    } else {
      guessBtn.disabled = true;
      html = `
      <h2 class="incorrect-ans">INCORRECT!</h2><br>
      <p>The number we were looking for was ${answer}.</p>
      <p>If you had guessed ${answer}, you would have won... ${cashPrize}!</p>
      <p>Refresh to play again.</p>`;
    }
  } else {
    console.log("correct!");
    html = `
    <h2 class="correct-ans">CORRECT!</h2>
    <p>The number we were looking for was ${answer}.</p>
    <p>You have won... ${cashPrize}!</p>
    <p>Refresh to play again.</p>`;
    guessBtn.disabled = true;
  }
  display.innerHTML = html;
}

guessBtn.addEventListener("click", giveAnswer);
