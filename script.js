// Select DOM elements
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const celebrationDiv = document.getElementById('celebration');

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
  celebrationDiv.style.display = 'block';
  noButton.style.display = 'none';
  yesButton.style.display = 'none';
});

// Handle "No" button click
noButton.addEventListener('click', () => {
  // Playfully move the "No" button around the screen
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});