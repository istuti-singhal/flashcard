const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
let words = {
    Hello: "नमस्ते",
    Goodbye: "अलविदा",
    Water: "पानी",
    Food: "खाना",
    Tree: "वृक्ष",
    Mom: "मां",
    Toilet: "शौचालय",
    School: "विद्यालय",
    Rain: "बारिश",


};
data = Object.entries(words)
function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
};
checkButton.addEventListener('click', function(){
    definition.style.display = 'block';
});
nextButton.addEventListener('click', function(){
    definition.style.display = 'none';
    getRandomWord();
});