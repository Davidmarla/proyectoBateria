"use strict";

let ride = document.querySelector(".ride");
let crash = document.querySelector(".crash");
let hihat = document.querySelector(".hihat");
let snare = document.querySelector(".snare");
let tom = document.querySelector(".tom");
let kick = document.querySelector(".kick");

const vibrateInstrument = (instrument) => {
    instrument.classList.add("vibrate");

    setTimeout(() => instrument.classList.remove("vibrate"), 250);
};

const playRide = () => {
    let rideSound = new Audio("./sounds/ride.wav");
    rideSound.play();
    vibrateInstrument(ride);
};

const playCrash = () => {
    let crashSound = new Audio("./sounds/crash.wav");
    crashSound.play();
    vibrateInstrument(crash);
};

const playHOpen = () => {
    let hihatSound = new Audio("./sounds/hihat-open.wav");
    hihatSound.play();
    vibrateInstrument(hihat);
};

const playSnare = () => {
    let snareSound = new Audio("./sounds/snare.wav");
    snareSound.play();
    vibrateInstrument(snare);
}

const playTomMid = () => {
    let tomMidSound = new Audio("./sounds/tom-mid.wav");
    tomMidSound.play();
    vibrateInstrument(tom);
}

const playKick = () => {
    let kickSound = new Audio("./sounds/kick.wav");
    kickSound.play();
    vibrateInstrument(kick);
}

ride.addEventListener("click", () => {
    playRide();
});

crash.addEventListener("click", () => {
    playCrash();
});

hihat.addEventListener("click", () => {
    playHOpen();
});

snare.addEventListener("click", () => {
    playSnare();
});

tomMid.addEventListener("click", () => {
    playTomMid();
});

kick.addEventListener("click", () => {
    playKick();
});

function handleKeyDown(e) {
    console.log(e);
    switch (e.code) {
        case "KeyT":
            playRide();
            break;

        case "KeyY":
            playCrash();
            break;

        case "KeyD":
            let hihatSound1 = new Audio("./sounds/hihat-close.wav");
            hihatSound1.play();
            break;

        case "KeyF":
            playHOpen();
            break;

        case "KeyG":
            playSnare();
            break;

        case "KeyH":
            let tomSound = new Audio("./sounds/tom-high.wav");
            tomSound.play();
            break;

        case "KeyJ":
            playTomMid();
            break;

        case "KeyK":
            let tomSound2 = new Audio("./sounds/tom-low.wav");
            tomSound2.play();
            break;

        case "Space":
            playKick();
            break;
    }
}

document.addEventListener("keydown", handleKeyDown);


const playHClose = () => {
    window.addEventListener(
        "click",
        function (e) {
            if (e.shiftKey) {
                let hHCloseSound = new Audio("./sounds/hihat-close.wav");
                hHCloseSound.play();
                vibrateInstrument(hihat);
            } else {
            }
        },
        false
    );
};
