const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Thanks for visiting my website!";
});