document.addEventListener("DOMContentLoaded", (_) => {
  setupFormField();
  startGame();
});

function startGame() {
  window.randomNumber = Math.floor(Math.random() * 101);
  logLine("Please enter a number between 0 and 100.<br>")
  document.addEventListener('answerSubmit', submitAnswerHandler)
}

function submitAnswerHandler(event) {
  var guess = parseInt(event.detail)
  var randomNumber = window.randomNumber

  console.log(randomNumber)

  if (guess < 0) logLine("<span class='red'>Please enter a positive number.</span><br>");
  if (guess > 100) logLine("<span class='red'>Please enter a number below 100.</span><br>");
  if (guess < randomNumber) logLine("<span class='orange'>Your number is too low. Try again.</span><br>");
  if (guess > randomNumber) logLine("<span class='orange'>Your number is too high. Try again.</span><br>");
  if (guess === randomNumber) logWin();
}

function resetGame() {
  var log = document.querySelector("[data-target='log'")
  log.innerHTML = ""
  document.removeEventListener("answerSubmit", submitAnswerHandler)
  startGame();
}

function logLine(text) {
  var log = document.querySelector("[data-target='log'")
  log.innerHTML += `${text}`
  event.preventDefault();
  return log.innerText;
}

function logWin() {
  logLine("<span class='green'>Yaaay, you've won!</span><br>");
  var log = document.querySelector("[data-target='log']")
  var img = document.createElement("img");
  img.src = "https://cataas.com/cat"
  log.appendChild(img)
}

function setupFormField() {
  const form = document.querySelector("[data-target='input-form']")
  const textField = document.querySelector("[data-target='text-field']")
  const resetGameLink = document.querySelector("[data-target='reset-game'")

  form.addEventListener('submit', (_) => {
    logLine("> " + textField.value + "<br>")
    const event = new CustomEvent('answerSubmit', { detail: textField.value });
    document.dispatchEvent(event);
    textField.value = ""
  });

  resetGameLink.addEventListener('click', (event) => {
    resetGame()
    event.preventDefault()
  })
}
