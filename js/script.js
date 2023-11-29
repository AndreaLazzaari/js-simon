// Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
// Che scadra' quindi a capodanno!


const daysEl = document.querySelector('span#giorni');
const hoursEl = document.querySelector('span#ore');
const minutesEl = document.querySelector('span#minuti');
const secondsEl = document.querySelector('span#secondi');


const capodanno = new Date( 2024, 0, 1, 0, 0, 0, 0);
console.log(capodanno);

const timer = setInterval( function(){
    
    const presente = new Date();
    const nuovaData = capodanno.getTime() - presente.getTime();

    secondsEl.innerHTML = Math.floor((nuovaData % (60 * 1000)) / 1000);
    minutesEl.innerHTML = Math.floor((nuovaData % (60 * 60 * 1000)) / (1000 * 60));
    hoursEl.innerHTML = Math.floor((nuovaData % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysEl.innerHTML = Math.floor((nuovaData / (60 * 60 * 24 * 1000)));

    if ( nuovaData <= 0 ){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'BUON ANNO';
    }

}, 1000);