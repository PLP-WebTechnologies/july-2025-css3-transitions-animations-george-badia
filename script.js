/* ========================
   Part 2: JavaScript Functions
   ======================== */

// Global variable (scope example)
var userName = "Student";

// Function with parameter & return value
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the interactive demo.";
}

// Function using local scope
function calculateSquare(number) {
  var result = number * number; // local variable
  return result;
}

// Show function outputs in console
console.log(greetUser(userName));  // "Hello, Student..."
console.log("Square of 5 is:", calculateSquare(5));

/* ========================
   Part 3: Combine JS + CSS Animations
   ======================== */

// Modal functionality
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementById("closeModalBtn");

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Bonus: close when clicking outside modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
