
const buttonReset = document.getElementById('buttonReset');

const visitCounter = document.getElementById('visitsCounter');

visitCounter.innerText = '1';

buttonReset.innerText = 'Reset'


buttonReset.addEventListener('click', resetP);




function resetP() {
    visitCounter.innerText = '0';
}