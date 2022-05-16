// Array of simple colors
const colors = ['green','red','rgba(133,122,200)','#f15025'
];
// Target the button
const btn = document.getElementById('btn');
// Color value
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get a random number between 0 - 3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   // get into the array
   document.body.style.backgroundColor = colors[randomNumber];
   // select the color
   color.textContent = colors[randomNumber];
});

// Generate random number
function getRandomNumber() {
    // Math.floor() will round down to the nearest full number
    // Math.random() will help us select a random number from the array
    return Math.floor(Math.random() * colors.length);
}