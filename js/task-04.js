const value = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function updateCounterValue() {
    value.textContent = counterValue;
}
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    updateCounterValue();
}
function increment() {
    counterValue += 1;
    updateCounterValue();
}
