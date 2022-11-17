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
    let rideSound = new Audio("./sounds/crash.wav");
    rideSound.play();
    vibrateInstrument(crash);
};

const playHOpen = () => {
    let rideSound = new Audio("./sounds/hihat-open.wav");
    rideSound.play();
    vibrateInstrument(hihat);
};

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
    let snareSound = new Audio("./sounds/snare.wav");
    snareSound.play();
});

tom.addEventListener("click", () => {
    let tomSound = new Audio("./sounds/tom-mid.wav");
    tomSound.play();
});

kick.addEventListener("click", () => {
    let kickSound = new Audio("./sounds/kick.wav");
    kickSound.play();
});

function handleKeyDown(e) {
    console.log(e);
    switch (e.code) {
        case "KeyT":
            playRide();
            break;
        case "KeyY":
            let crashSound = new Audio("./sounds/crash.wav");
            crashSound.play();
            break;

        case "KeyD":
            let hihatSound1 = new Audio("./sounds/hihat-close.wav");
            hihatSound1.play();
            break;

        case "KeyF":
            let hihatSound = new Audio("./sounds/hihat-open.wav");
            hihatSound.play();
            break;

        case "KeyG":
            let snareSound = new Audio("./sounds/snare.wav");
            snareSound.play();
            break;

        case "KeyH":
            let tomSound = new Audio("./sounds/tom-high.wav");
            tomSound.play();
            break;

        case "KeyJ":
            let tomSound1 = new Audio("./sounds/tom-mid.wav");
            tomSound1.play();
            break;

        case "KeyK":
            let tomSound2 = new Audio("./sounds/tom-low.wav");
            tomSound2.play();
            break;

        case "Space":
            let kickSound = new Audio("./sounds/kick.wav");
            kickSound.play();
            break;
    }
}

document.addEventListener("keydown", handleKeyDown);
