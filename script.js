const secondDigitsOnes = Array.from(document.querySelectorAll(".second-digit-ones"));
const secondDigitsTens = Array.from(document.querySelectorAll(".second-digit-tens"));

const minuteDigitsOnes = Array.from(document.querySelectorAll(".minute-digit-ones"));
const minuteDigitsTens = Array.from(document.querySelectorAll(".minute-digit-tens"));

const hourDigitsOnes = Array.from(document.querySelectorAll(".hour-digit-ones"));
const hourDigitsTens = Array.from(document.querySelectorAll(".hour-digit-tens"));

function getNowTime() {
    const nowTime = new Date();
    const nowSecond = nowTime.getSeconds();
    const nowMinute = nowTime.getMinutes();
    const nowHour = nowTime.getHours();
    return { nowHour, nowMinute, nowSecond };
}

function updateClock() {
    //Second//
    //secondOnes
    secondOnes = getNowTime().nowSecond % 10;

    if (secondDigitsOnes[0].textContent !== secondOnes.toString()) {
        secondDigitsOnes[0].textContent = secondOnes;
        secondDigitsOnes[3].textContent = secondOnes;

        const digitTopOnes = document.getElementById("second-digit-top-ones");
        const digitBottomOnes = document.getElementById("second-digit-bottom-ones");
        digitTopOnes.classList.add("flip-top");
        digitBottomOnes.classList.add("flip-bottom");

        setTimeout(() => {
            digitTopOnes.classList.remove("flip-top");
            digitBottomOnes.classList.remove("flip-bottom");
            secondDigitsOnes[1].textContent = secondOnes;
            secondDigitsOnes[2].textContent = secondOnes;
        }, 950);
        digitSoundPlay();
    }

    //second tens
    secondTens = Math.floor(getNowTime().nowSecond / 10);

    if (secondDigitsTens[0].textContent !== secondTens.toString()) {
        secondDigitsTens[0].textContent = secondTens;
        secondDigitsTens[3].textContent = secondTens;

        const digitTopTens = document.getElementById("second-digit-top-tens");
        const digitBottomTens = document.getElementById("second-digit-bottom-tens");
        digitTopTens.classList.add("flip-top");
        digitBottomTens.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopTens.classList.remove("flip-top");
            digitBottomTens.classList.remove("flip-bottom");
            secondDigitsTens[1].textContent = secondTens;
            secondDigitsTens[2].textContent = secondTens;
        }, 950);
        digitSoundPlay();
    }
    //Minute
    //minute ones
    minuteOnes = getNowTime().nowMinute % 10;

    if (minuteDigitsOnes[0].textContent !== minuteOnes.toString()) {
        minuteDigitsOnes[0].textContent = minuteOnes;
        minuteDigitsOnes[3].textContent = minuteOnes;

        const digitTopOnes = document.getElementById("minute-digit-top-ones");
        const digitBottomOnes = document.getElementById("minute-digit-bottom-ones");
        digitTopOnes.classList.add("flip-top");
        digitBottomOnes.classList.add("flip-bottom");

        setTimeout(() => {
            digitTopOnes.classList.remove("flip-top");
            digitBottomOnes.classList.remove("flip-bottom");
            minuteDigitsOnes[1].textContent = minuteOnes;
            minuteDigitsOnes[2].textContent = minuteOnes;
        }, 950);
        digitSoundPlay();
    }


    //minute tens
    minuteTens = Math.floor(getNowTime().nowMinute / 10);

    if (minuteDigitsTens[0].textContent !== minuteTens.toString()) {
        minuteDigitsTens[0].textContent = minuteTens;
        minuteDigitsTens[3].textContent = minuteTens;

        const digitTopTens = document.getElementById("minute-digit-top-tens");
        const digitBottomTens = document.getElementById("minute-digit-bottom-tens");
        digitTopTens.classList.add("flip-top");
        digitBottomTens.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopTens.classList.remove("flip-top");
            digitBottomTens.classList.remove("flip-bottom");
            minuteDigitsTens[1].textContent = minuteTens;
            minuteDigitsTens[2].textContent = minuteTens;
        }, 950);
        digitSoundPlay();
    }

    // Hour
    //hour ones
    hourOnes = getNowTime().nowHour % 10;

    if (hourDigitsOnes[0].textContent !== hourOnes.toString()) {
        hourDigitsOnes[0].textContent = hourOnes;
        hourDigitsOnes[3].textContent = hourOnes;

        const digitTopOnes = document.getElementById("hour-digit-top-ones");
        const digitBottomOnes = document.getElementById("hour-digit-bottom-ones");
        digitTopOnes.classList.add("flip-top");
        digitBottomOnes.classList.add("flip-bottom");

        setTimeout(() => {
            digitTopOnes.classList.remove("flip-top");
            digitBottomOnes.classList.remove("flip-bottom");
            hourDigitsOnes[1].textContent = hourOnes;
            hourDigitsOnes[2].textContent = hourOnes;
        }, 950);
        digitSoundPlay();
    }


    //minute tens
    hourTens = Math.floor(getNowTime().nowHour / 10);

    if (hourDigitsTens[0].textContent !== hourTens.toString()) {
        hourDigitsTens[0].textContent = hourTens;
        hourDigitsTens[3].textContent = hourTens;

        const digitTopTens = document.getElementById("hour-digit-top-tens");
        const digitBottomTens = document.getElementById("hour-digit-bottom-tens");
        digitTopTens.classList.add("flip-top");
        digitBottomTens.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopTens.classList.remove("flip-top");
            digitBottomTens.classList.remove("flip-bottom");
            hourDigitsTens[1].textContent = hourTens;
            hourDigitsTens[2].textContent = hourTens;
        }, 950);
    }
}

setInterval(() => {
    updateClock();
}, 1000);

function digitSoundPlay(){
    let digitSound = new Audio("https://sounds.pond5.com/industrial-switch-light-flick-03-sound-effect-102261650_nw_prev.m4a");
    digitSound.play();
};

