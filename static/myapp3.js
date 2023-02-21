const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
let words = {
    TATA: "Jamsetji Tata",
    Infosys: "N. R. Narayan Murthi",
    Airtel: "Sunil Mittal",
    Reliance_Industries: "Dhirubhai Ambani",
    Genpact: "Pramod Bhasin",
    Bajaj_Auto: "Jamnalal Bajaj",
    HCL_Enterprise: "Shiv Nadar",
    Wipro: "Mohamed Hasham Premji",
    Ashok_Leyland: "Raghunandan Saran",
    Paytm: "Vijay Shekhar Sharma",
    BYJU: "Byju Raveendran"


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