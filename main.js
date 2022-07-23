//Global variables
const leTemps = document.querySelector('.watch .time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let seconds = 0;
let ticker = null;

//Event Listeners
startButton.addEventListener('click', start);

//functions to start time

function timer() {
    seconds++;

    //society's construct of time

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;

    leTemps.innerText = `${hours}:${minutes}${secs}`;

}

function start() {
    if(ticker){
        return
    }
   
    ticker = setInterval(timer, 1000);
}


