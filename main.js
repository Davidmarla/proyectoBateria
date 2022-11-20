import * as functions from "/functions.js";

("use strict");

/* let ride = document.querySelector(".ride");
let crash = document.querySelector(".crash");
let hihat = document.querySelector(".hihat");
let hihat1 = document.querySelector(".hihat");
let snare = document.querySelector(".snare");
let tom = document.querySelector(".tom");
let kick = document.querySelector(".kick");

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
            break;
    }
} */

// MANEJO DE LOS INSTRUMENTOS DESDE RATÓN O PULSACIÓN

functions.ride.addEventListener("click", () => {
    functions.playRide();
});

functions.crash.addEventListener("click", () => {
    functions.playCrash();
});

functions.hihat.addEventListener("click", () => {
    functions.playHOpen();
});

functions.snare.addEventListener("click", () => {
    functions.playSnare();
});

functions.tom.addEventListener("click", () => {
    functions.playTomMid();
});

functions.kick.addEventListener("click", () => {
    functions.playKick();
});

document.addEventListener("keydown", functions.handleKeyDown);

// MANEJO DEL TECLADO VIRTUAL EN MÓVILES MEDIANTE PULSACIÓN

let teclaT = document.querySelector(".teclaT");
let teclaY = document.querySelector(".teclaY");
let teclaD = document.querySelector(".teclaD");
let teclaF = document.querySelector(".teclaF");
let teclaG = document.querySelector(".teclaG");
let teclaH = document.querySelector(".teclaH");
let teclaJ = document.querySelector(".teclaJ");
let teclaK = document.querySelector(".teclaK");
let teclaSB = document.querySelector(".teclaSB");

teclaT.addEventListener("click", () => {
    functions.playRide();
});

teclaY.addEventListener("click", () => {
    functions.playCrash();
});

teclaD.addEventListener("click", () => {
    functions.playHOpen();
});

teclaF.addEventListener("click", () => {
    functions.playHClose();
});

teclaG.addEventListener("click", () => {
    functions.playSnare();
});

teclaH.addEventListener("click", () => {
    functions.playTomHigh();
});

teclaJ.addEventListener("click", () => {
    functions.playTomMid();
});

teclaK.addEventListener("click", () => {
    functions.playTomLow();
});

teclaSB.addEventListener("click", () => {
    functions.playKick();
});

////////////BONUS

/* let recording = false;
let record = document.querySelector(".record");
let play = document.querySelector(".play");
let stopRec = document.querySelector(".stop");
let recordedArray = []; */

let altRecording = functions.recording;
let altRecordedArray = functions.recordedArray;

functions.record.addEventListener("click", () => {
    altRecording = true;
    altRecordedArray = [];
});

functions.play.addEventListener("click", () => {
    functions.playArray();
});

functions.stopRec.addEventListener("click", () => {
    altRecording = false;
});

/* function recordFunc(a) {
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
} */
