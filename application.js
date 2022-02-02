// What to do once the HTML Document Object Model (DOM) has been completely loaded
document.addEventListener("DOMContentLoaded", (_) => {
  setupFormField();
  startGame();
});

// Game
function startGame() {
  const randomNumber = Math.floor(Math.random() * 101);
  logLine("Please enter a number between 0 and 100.\n")

  document.addEventListener('answerSubmit', (event) => {
    logLine(`You've guessed ${event.detail}, the random number was ${randomNumber}\n`)
  })
}

// Functions
function logLine(text) {
  var log = document.querySelector("[data-target='log'")
  log.innerText += `${text}`
  event.preventDefault();
  return log.innerText;
}

// Setup
function setupFormField() {
  const form = document.querySelector("[data-target='input-form']")
  const textField = document.querySelector("[data-target='text-field']")

  form.addEventListener('submit', (_) => {
    logLine("> " + textField.value + "\n")
    const event = new CustomEvent('answerSubmit', { detail: textField.value });
    document.dispatchEvent(event);
    textField.value = ""

  });
}
