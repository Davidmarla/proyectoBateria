"use strict";

let ride = document.querySelector(".ride");
let crash = document.querySelector(".crash");
let hihat = document.querySelector(".hihat");
let hihat1 = document.querySelector(".hihat");
let snare = document.querySelector(".snare");
let tom = document.querySelector(".tom");
let kick = document.querySelector(".kick");
let teclaT = document.querySelector(".teclaT");
let teclaY = document.querySelector(".teclaY");
let teclaD = document.querySelector(".teclaD");
let teclaF = document.querySelector(".teclaF");
let teclaG = document.querySelector(".teclaG");
let teclaH = document.querySelector(".teclaH");
let teclaJ = document.querySelector(".teclaJ");
let teclaK = document.querySelector(".teclaK");
let teclaSB = document.querySelector(".teclaSB");

// FUNCIONES PARA HACER SONAR, GRABAR Y VIBRAR LOS INSTRUMENTOS MEDIANTE RATÓN, TECLADO Y PULSACIÓN EN PANTALLA

const vibrateInstrument = (instrument) => {
    instrument.classList.add("vibrate");

    setTimeout(() => instrument.classList.remove("vibrate"), 250);
};

const playRide = () => {
    let rideSound = new Audio("./sounds/ride.wav");
    rideSound.play();
    vibrateInstrument(ride);
    if (recording) {
        recordFunc(rideSound);
    }
};

const playCrash = () => {
    let crashSound = new Audio("./sounds/crash.wav");
    crashSound.play();
    vibrateInstrument(crash);
    if (recording) {
        recordFunc(crashSound);
    }
};

const playHOpen = () => {
    let hHOpenSound = new Audio("./sounds/hihat-open.wav");
    hHOpenSound.play();
    vibrateInstrument(hihat);
    if (recording) {
        recordFunc(hHOpenSound);
    }
};

const playHClose = () => {
    let hHOpenSound1 = new Audio("./sounds/hihat-close.wav");
    hHOpenSound1.play();
    vibrateInstrument(hihat);
    if (recording) {
        recordFunc(hHOpenSound1);
    }
};

const playSnare = () => {
    let snareSound = new Audio("./sounds/snare.wav");
    snareSound.play();
    vibrateInstrument(snare);
    if (recording) {
        recordFunc(snareSound);
    }
};

const playTomHigh = () => {
    let tomMidSound1 = new Audio("./sounds/tom-high.wav");
    tomMidSound1.play();
    vibrateInstrument(tom);
    if (recording) {
        recordFunc(tomMidSound1);
    }
};

const playTomMid = () => {
    let tomMidSound = new Audio("./sounds/tom-mid.wav");
    tomMidSound.play();
    vibrateInstrument(tom);
    if (recording) {
        recordFunc(tomMidSound);
    }
};

const playTomLow = () => {
    let tomMidSound2 = new Audio("./sounds/tom-low.wav");
    tomMidSound2.play();
    vibrateInstrument(tom);
    if (recording) {
        recordFunc(tomMidSound2);
    }
};

const playKick = () => {
    let kickSound = new Audio("./sounds/kick.wav");
    kickSound.play();
    vibrateInstrument(kick);
    if (recording) {
        recordFunc(kickSound);
    }
};

function handleKeyDown(e) {
    switch (e.code) {
        case "KeyT":
            playRide();
            break;

        case "KeyY":
            playCrash();
            break;

        case "KeyD":
            playHOpen();
            break;

        case "KeyF":
            playHClose();
            break;

        case "KeyG":
            playSnare();
            break;

        case "KeyH":
            playTomHigh();
            break;

        case "KeyJ":
            playTomMid();
            break;

        case "KeyK":
            playTomLow();
            break;

        case "Space":
            playKick();
            break; //  BONUS FUNCTIONS
            function recordFunc(a) {
                recordedArray.push(a);
                //console.log(a);
            }

            function playArray() {
                for (let i = 0; i < recordedArray.length; i++) {
                    setTimeout(function () {
                        recordedArray[i].play();
                        //console.log(recordedArray[i]);
                    }, 300 * i);
                }
            }
    }
}

//////////// BONUS

let recording = true;
let record = document.querySelector(".record");
let play = document.querySelector(".play");
let stopRec = document.querySelector(".stop");
let recordedArray = [];

function recordFunc(a) {
    recordedArray.push(a);
    //console.log(a);
}

function playArray() {
    for (let i = 0; i < recordedArray.length; i++) {
        setTimeout(function () {
            recordedArray[i].play();
            //console.log(recordedArray[i]);
        }, 300 * i);
    }
}

export {
    ride,
    crash,
    hihat,
    hihat1,
    snare,
    tom,
    kick,
    teclaT,
    teclaY,
    teclaD,
    teclaF,
    teclaG,
    teclaH,
    teclaJ,
    teclaK,
    teclaSB,
    vibrateInstrument,
    playRide,
    playCrash,
    playHOpen,
    playHClose,
    playSnare,
    playTomHigh,
    playTomMid,
    playTomLow,
    playKick,
    handleKeyDown,
    recording,
    record,
    play,
    stopRec,
    recordedArray,
    recordFunc,
    playArray,
};
