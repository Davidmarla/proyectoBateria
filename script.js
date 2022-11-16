"use strict";

let ride = document.querySelector(".ride");
let crash = document.querySelector(".crash");
let hihat = document.querySelector(".hihat");
let snare = document.querySelector(".snare");
let tom = document.querySelector(".tom");
let kick = document.querySelector(".kick");

ride.addEventListener("click", () => {
    let rideSound = new Audio("./sounds/ride.wav");
    rideSound.play();
});

crash.addEventListener("click", () => {
    let crashSound = new Audio("./sounds/crash.wav");
    crashSound.play();
});

hihat.addEventListener("click", () => {
    let hihatSound = new Audio("./sounds/hihat-open.wav");
    hihatSound.play();
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

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
    console.log(e.code);
    switch (e.code) {
        case "KeyT":
            let rideSound = new Audio("./sounds/ride.wav");
            rideSound.play();

        case "KeyY":
            let crashSound = new Audio("./sounds/crash.wav");
            crashSound.play();

        case "KeyF":
            let hihatSound = new Audio("./sounds/hihat-open.wav");
            hihatSound.play();

        case "KeyG":
            let snareSound = new Audio("./sounds/snare.wav");
            snareSound.play();

        case "KeyH":
            let tomSound = new Audio("./sounds/tom-mid.wav");
            tomSound.play();

        case "KeyB":
            let kickSound = new Audio("./sounds/kick.wav");
            kickSound.play();
    }
}
