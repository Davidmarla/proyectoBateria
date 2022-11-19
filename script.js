"use strict";

let ride = document.querySelector(".ride");
let crash = document.querySelector(".crash");
let hihat = document.querySelector(".hihat");
let hihat1 = document.querySelector(".hihat");
let snare = document.querySelector(".snare");
let tom = document.querySelector(".tom");
let kick = document.querySelector(".kick");

//////////////////// FUNCIONES PARA HACER SONAR LOS INSTRUMENTOS MEDIANTE RATÓN, TECLADO Y PULSACIÓN EN PANTALLA
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
    let hHOpenSound = new Audio("./sounds/hihat-open.wav");
    hHOpenSound.play();
    vibrateInstrument(hihat);
};

const playHClose = () => {
    let hHOpenSound1 = new Audio("./sounds/hihat-close.wav");
    hHOpenSound1.play();
    vibrateInstrument(hihat);
};

const playSnare = () => {
    let snareSound = new Audio("./sounds/snare.wav");
    snareSound.play();
    vibrateInstrument(snare);
};

const playTomHigh = () => {
    let tomMidSound1 = new Audio("./sounds/tom-high.wav");
    tomMidSound1.play();
    vibrateInstrument(tom);
};

const playTomMid = () => {
    let tomMidSound = new Audio("./sounds/tom-mid.wav");
    tomMidSound.play();
    vibrateInstrument(tom);
};

const playTomLow = () => {
    let tomMidSound2 = new Audio("./sounds/tom-low.wav");
    tomMidSound2.play();
    vibrateInstrument(tom);
};

const playKick = () => {
    let kickSound = new Audio("./sounds/kick.wav");
    kickSound.play();
    vibrateInstrument(kick);
};

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
}

//////////////////// MANEJO DE LOS INSTRUMENTOS DESDE RATÓN O PULSACIÓN
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

/////////////////   MANEJO DEL TECLADO VIRTUAL EN MÓVILES MEDIANTE PULSACIÓN
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

teclaSB.addEventListener("click", () => {
    playKick();
});


//Primeiro crear un array, onde se garde cada sonido cada vez que sona.

let rec = ["rideSound", "crashSound", "hHOpenSound", "hHOpenSound1", "snareSound", "tomMidSound1", "tomMidSound", "tomMidSound2", "kickSound"]

//rec.push("ridesound")
//console.log(rec)



//Logo recorrer o array para reproducir o gardado nel

navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {handlerFunction(stream)})


    function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if (rec.state == "inactive"){
        let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls=true;
        recordedAudio.autoplay=true;
        sendData(blob)
        }
    }
    }
        function sendData(data) {}

record.onclick = e => {
    console.log('I was clicked')
    record.disabled = true;
    record.style.backgroundColor = "blue"
    stopRecord.disabled=false;
    audioChunks = [];
    rec.start();
}
stopRecord.onclick = e => {
    console.log("I was clicked")
    record.disabled = false;
    stop.disabled=true;
    record.style.backgroundColor = "red"
    rec.stop();
}