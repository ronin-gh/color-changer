const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber(); 
    console.log(randomNumber);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    
}