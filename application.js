// What to do once the HTML Document Object Model (DOM) has been completely loaded
document.addEventListener("DOMContentLoaded", (_) => {
  setupFormField();
});

// Functions
function logLine(text) {
  var log = document.querySelector("[data-target='log'")
  log.innerText += `${text}\n`
  event.preventDefault();
}

// Setup
function setupFormField() {
  const form = document.querySelector("[data-target='input-form']")
  const textField = document.querySelector("[data-target='text-field']")

  form.addEventListener('submit', (_) => {
    logLine(textField.value)
    textField.value = ""
  });
}
