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

    var guess = parseInt(event.detail)

    console.log(randomNumber)
    console.log(guess)

    if (guess < 0) logLine("Please enter a positive number.\n");
    if (guess > 100) logLine("Please enter a number below 100.\n");
    if (guess < randomNumber) logLine("Your number is too low. Try again.\n");
    if (guess > randomNumber) logLine("Your number is too high. Try again.\n");
    if (guess === randomNumber) logLine("Yaaay, you won!\n");
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
