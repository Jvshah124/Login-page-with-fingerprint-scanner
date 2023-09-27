// Simulate a login action when the login button is clicked
document.getElementById("login-button").addEventListener("click", () => {
  // Replace this with your actual login logic
  alert("Login successful!");
});

// Get a reference to the scanner circle element
const scannerCircle = document.querySelector(".scanner-circle");

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Change the circle color when the button is clicked
document.getElementById("login-button").addEventListener("click", () => {
  const randomColor = getRandomColor();
  scannerCircle.style.backgroundColor = randomColor;
});
