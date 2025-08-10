document.addEventListener('DOMContentLoaded', () => {
  const ratingButtons = document.querySelectorAll('.rating-btn');
  const submitBtn = document.querySelector('button');
  let selectedRating = null;

  ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ratingButtons.forEach(b => {
        b.classList.remove('bg-orange-500', 'text-gray-900');
        b.classList.add('bg-gray-700', 'text-white');
      });

      btn.classList.add('bg-orange-500', 'text-gray-900');
      btn.classList.remove('bg-gray-700', 'text-white');

      selectedRating = btn.textContent;
    });
  });

  submitBtn.addEventListener('click', () => {
    if (!selectedRating) {
      alert('Please select a rating before submitting.');
      return;
    }
    alert(`You selected ${selectedRating} out of 5. Thank you!`);
  });
});
