// Select all rating buttons
const ratingButtons = document.querySelectorAll(".rating-btn");

// Select submit button
const submitBtn = document.getElementById("submit-btn");

// Select panels
const ratingPanel = document.getElementById("rating-panel");
const thankYouPanel = document.querySelector("body > div.hidden");

// Store selected rating
let selectedRating = null;

// Add click event to rating buttons
ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active state from all buttons
    ratingButtons.forEach((b) => b.classList.remove("bg-orange-500"));
    ratingButtons.forEach((b) => b.classList.add("bg-gray-700"));

    // Add active state to clicked button
    btn.classList.add("bg-orange-500");
    btn.classList.remove("bg-gray-700");

    // Store selected rating
    selectedRating = btn.textContent;
  });
});

// Submit button click
submitBtn.addEventListener("click", () => {
  if (!selectedRating) {
    alert("Please select a rating before submitting!");
    return;
  }

  // Hide rating panel
  ratingPanel.classList.add("hidden");

  // Show thank-you panel
  thankYouPanel.classList.remove("hidden");

  // Update the selected rating text
  const selectedText = thankYouPanel.querySelector("p");
  selectedText.textContent = `You selected ${selectedRating} out of 5`;
});
