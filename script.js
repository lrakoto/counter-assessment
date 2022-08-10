const currentCountText = document.querySelector('#count');
const countInput = document.querySelector('#counterinput');
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');
let currentCount = 0;
let inputValue = 1;
let userInput = 0;
countInput.value = inputValue;

plusButton.addEventListener('click', addValue);
minusButton.addEventListener('click', subtractValue);
countInput.addEventListener('input', userValue)


function addValue() {
    currentCount = parseInt(currentCount) + parseInt(inputValue);
    currentCountText.textContent = currentCount;
    if(currentCount < 0) {
        currentCountText.style.color = 'red';
    } else {
        currentCountText.style.color = 'black';
    }
}

function subtractValue() {
    currentCount = parseInt(currentCount) - parseInt(inputValue);
    currentCountText.textContent = currentCount;
    if(currentCount < 0) {
        currentCountText.style.color = 'red';
    } else {
        currentCountText.style.color = 'black';
    }
}

function userValue() {
    inputValue = countInput.value;
    parseInt(inputValue);
    if(currentCount < 0) {
        currentCountText.style.color = 'red';
    } else {
        currentCountText.style.color = 'black';
    }
}
