let count = 1;
const min = 0;
const max = 10;

const countDisplay = document.getElementById('count-display');
const limitMessage = document.getElementById('limit-message');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

function updateDisplay() {
    countDisplay.textContent = count;
    limitMessage.textContent = (count === max) ? "Maximum limit reached" : "";
    incrementBtn.disabled = count === max;
    decrementBtn.disabled = count === min;
}

incrementBtn.addEventListener('click', () => {
    if (count < max) count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    if (count > min) count--;
    updateDisplay();
});

// Initial render
updateDisplay();