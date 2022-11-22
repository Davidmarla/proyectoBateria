"use strict";

import {
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
    teclaB,
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
    clearRec,
    startRecording,
    stopRecording,
} from "/functions.js";

// MANEJO DE LOS INSTRUMENTOS DESDE RATÓN O PULSACIÓN

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

tom.addEventListener("click", () => {
    playTomMid();
});

kick.addEventListener("click", () => {
    playKick();
});

document.addEventListener("keydown", handleKeyDown);

// MANEJO DEL TECLADO VIRTUAL EN MÓVILES MEDIANTE PULSACIÓN

teclaT.addEventListener("click", () => {
    playRide();
});

teclaY.addEventListener("click", () => {
    playCrash();
});

teclaD.addEventListener("click", () => {
    playHOpen();
});

teclaF.addEventListener("click", () => {
    playHClose();
});

teclaG.addEventListener("click", () => {
    playSnare();
});

teclaH.addEventListener("click", () => {
    playTomHigh();
});

teclaJ.addEventListener("click", () => {
    playTomMid();
});

teclaK.addEventListener("click", () => {
    playTomLow();
});

teclaB.addEventListener("click", () => {
    playKick();
});

//////////// BONUS

record.addEventListener("click", () => {
    startRecording();
    clearRec();
});

play.addEventListener("click", () => {
    playArray();
});

stopRec.addEventListener("click", () => {
    stopRecording();
});
