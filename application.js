// What to do once the HTML Document Object Model (DOM) has been completely loaded
document.addEventListener("DOMContentLoaded", (_) => {
  setupFormField();
  startGame();
});

// Game
function startGame() {
  const randomNumber = Math.floor(Math.random() * 101);
  logLine("Please enter a number between 0 and 100.<br>")

  document.addEventListener('answerSubmit', (event) => {

    var guess = parseInt(event.detail)

    console.log(randomNumber)

    if (guess < 0) logLine("<span class='red'>Please enter a positive number.</span><br>");
    if (guess > 100) logLine("<span class='red'>Please enter a number below 100.</span><br>");
    if (guess < randomNumber) logLine("<span class='orange'>Your number is too low. Try again.</span><br>");
    if (guess > randomNumber) logLine("<span class='orange'>Your number is too high. Try again.</span><br>");
    if (guess === randomNumber) logWin();
  })
}

// Functions
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

// Setup
function setupFormField() {
  const form = document.querySelector("[data-target='input-form']")
  const textField = document.querySelector("[data-target='text-field']")

  form.addEventListener('submit', (_) => {
    logLine("> " + textField.value + "<br>")
    const event = new CustomEvent('answerSubmit', { detail: textField.value });
    document.dispatchEvent(event);
    textField.value = ""
  });
}
