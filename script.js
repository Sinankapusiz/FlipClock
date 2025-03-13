//second
const secondDigitsOnes = Array.from(document.querySelectorAll(".second-digit-ones"));
const secondDigitsTens = Array.from(document.querySelectorAll(".second-digit-tens"));
//minute
const minuteDigitsOnes = Array.from(document.querySelectorAll(".minute-digit-ones"));
const minuteDigitsTens = Array.from(document.querySelectorAll(".minute-digit-tens"));
//hour
const hourDigitsOnes = Array.from(document.querySelectorAll(".hour-digit-ones"));
const hourDigitsTens = Array.from(document.querySelectorAll(".hour-digit-tens"));
//day of the week
const dayAlpsOne = Array.from(document.querySelectorAll(".day-week-one-alp"));
const dayAlpsTwo = Array.from(document.querySelectorAll(".day-week-two-alp"));
const dayAlpsThree = Array.from(document.querySelectorAll(".day-week-three-alp"));
//month of the year
const monthAlpsOne = Array.from(document.querySelectorAll(".month-year-one-alp"));
const monthAlpsTwo = Array.from(document.querySelectorAll(".month-year-two-alp"));
const monthAlpsThree = Array.from(document.querySelectorAll(".month-year-three-alp"));
//the year
const yearDigitsOne = Array.from(document.querySelectorAll(".year-one-alp"));
const yearDigitsTwo = Array.from(document.querySelectorAll(".year-two-alp"));
const yearDigitsThree = Array.from(document.querySelectorAll(".year-three-alp"));
const yearDigitsFour = Array.from(document.querySelectorAll(".year-four-alp"));

function getNowTime() {
    const nowTime = new Date();
    const nowSecond = nowTime.getSeconds();
    const nowMinute = nowTime.getMinutes();
    const nowHour = nowTime.getHours();
    const nowMonth = nowTime.getMonth();
    const shortMonthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const nowShortMonthName = shortMonthNames[nowMonth];
    const nowDayOfTheWeek = nowTime.getDay();
    const shortDayOfTheWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const nowShortDayOfTheWeekName = shortDayOfTheWeekNames[nowDayOfTheWeek];
    const nowYear = nowTime.getFullYear();
    return { nowHour, nowMinute, nowSecond, nowShortMonthName, nowShortDayOfTheWeekName, nowYear };
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


    //hour tens
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
    // Day of the week
    day = getNowTime().nowShortDayOfTheWeekName;

    // day alp one
    if (dayAlpsOne[0].textContent !== day[0]) {
        dayAlpsOne[0].textContent = day[0];
        dayAlpsOne[3].textContent = day[0];

        const alpTopOne = document.getElementById("day-week-alp-top-one");
        const alpBottomOne = document.getElementById("day-week-alp-bottom-one");
        alpTopOne.classList.add("flip-top");
        alpBottomOne.classList.add("flip-bottom");
        setTimeout(() => {
            alpTopOne.classList.remove("flip-top");
            alpBottomOne.classList.remove("flip-bottom");
            dayAlpsOne[1].textContent = day[0];
            dayAlpsOne[2].textContent = day[0];
        }, 950);
    }
    // day alp two
    if (dayAlpsTwo[0].textContent !== day[1]) {
        dayAlpsTwo[0].textContent = day[1];
        dayAlpsTwo[3].textContent = day[1];

        const alpTopTwo = document.getElementById("day-week-alp-top-two");
        const alpBottomTwo = document.getElementById("day-week-alp-bottom-two");
        alpTopTwo.classList.add("flip-top");
        alpBottomTwo.classList.add("flip-bottom");
        setTimeout(() => {
            alpTopTwo.classList.remove("flip-top");
            alpBottomTwo.classList.remove("flip-bottom");
            dayAlpsTwo[1].textContent = day[1];
            dayAlpsTwo[2].textContent = day[1];
        }, 950);
    }
    // day alp three
    if (dayAlpsThree[0].textContent !== day[2]) {
        dayAlpsThree[0].textContent = day[2];
        dayAlpsThree[3].textContent = day[2];

        const alpTopThree = document.getElementById("day-week-alp-top-three");
        const alpBottomThree = document.getElementById("day-week-alp-bottom-three");
        alpTopThree.classList.add("flip-top");
        alpBottomThree.classList.add("flip-bottom");
        setTimeout(() => {
            alpTopThree.classList.remove("flip-top");
            alpBottomThree.classList.remove("flip-bottom");
            dayAlpsThree[1].textContent = day[2];
            dayAlpsThree[2].textContent = day[2];
        }, 950);
    }

    // Month of the year
    month = getNowTime().nowShortMonthName;

    // month alp one
    if (monthAlpsOne[0].textContent !== month[0]) {
        monthAlpsOne[0].textContent = month[0];
        monthAlpsOne[3].textContent = month[0];

        const alpTopOne = document.getElementById("month-year-alp-top-one");
        const alpBottomOne = document.getElementById("month-year-alp-bottom-one");
        alpTopOne.classList.add("flip-top");
        alpBottomOne.classList.add("flip-bottom");
        setTimeout(() => {
            alpTopOne.classList.remove("flip-top");
            alpBottomOne.classList.remove("flip-bottom");
            monthAlpsOne[1].textContent = month[0];
            monthAlpsOne[2].textContent = month[0];
        }, 950);
    }
    // month alp two
    if (monthAlpsTwo[0].textContent !== month[1]) {
        monthAlpsTwo[0].textContent = month[1];
        monthAlpsTwo[3].textContent = month[1];

        const alpTopTwo = document.getElementById("month-year-alp-top-two");
        const alpBottomTwo = document.getElementById("month-year-alp-bottom-two");
        alpTopTwo.classList.add("flip-top");
        alpBottomTwo.classList.add("flip-bottom");
        setTimeout(() => {
            alpTopTwo.classList.remove("flip-top");
            alpBottomTwo.classList.remove("flip-bottom");
            monthAlpsTwo[1].textContent = month[1];
            monthAlpsTwo[2].textContent = month[1];
        }, 950);
    }
    // month alp three
    if (monthAlpsThree[0].textContent !== month[2]) {
        monthAlpsThree[0].textContent = month[2];
        monthAlpsThree[3].textContent = month[2];

        const alpTopThree = document.getElementById("month-year-alp-top-three");
        const alpBottomThree = document.getElementById("month-year-alp-bottom-three");
        alpTopThree.classList.add("flip-top");
        alpBottomThree.classList.add("flip-bottom");
        setTimeout(() => {
            alpTopThree.classList.remove("flip-top");
            alpBottomThree.classList.remove("flip-bottom");
            monthAlpsThree[1].textContent = month[2];
            monthAlpsThree[2].textContent = month[2];
        }, 950);
    }

    // The year
    // the year thousands
    const yearThousands = Math.floor(getNowTime().nowYear / 1000);

    if (yearDigitsOne[0].textContent !== yearThousands.toString()) {
        yearDigitsOne[0].textContent = yearThousands;
        yearDigitsOne[3].textContent = yearThousands;

        const digitTopOne = document.getElementById("year-alp-top-one");
        const digitBottomOne = document.getElementById("year-alp-bottom-one");
        digitTopOne.classList.add("flip-top");
        digitBottomOne.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopOne.classList.remove("flip-top");
            digitBottomOne.classList.remove("flip-bottom");
            yearDigitsOne[1].textContent = yearThousands;
            yearDigitsOne[2].textContent = yearThousands;
        }, 950);
    }
    // the year hundreds
    const yearHundreds = Math.floor((getNowTime().nowYear % 1000) / 100);

    if (yearDigitsTwo[0].textContent !== yearHundreds.toString()) {
        yearDigitsTwo[0].textContent = yearHundreds;
        yearDigitsTwo[3].textContent = yearHundreds;

        const digitTopTwo = document.getElementById("year-alp-top-two");
        const digitBottomTwo = document.getElementById("year-alp-bottom-two");
        digitTopTwo.classList.add("flip-top");
        digitBottomTwo.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopTwo.classList.remove("flip-top");
            digitBottomTwo.classList.remove("flip-bottom");
            yearDigitsTwo[1].textContent = yearHundreds;
            yearDigitsTwo[2].textContent = yearHundreds;
        }, 950);
    }

    // the year tens
    const yearTens = Math.floor((getNowTime().nowYear % 1000) / 10);

    if (yearDigitsThree[0].textContent !== yearTens.toString()) {
        yearDigitsThree[0].textContent = yearTens;
        yearDigitsThree[3].textContent = yearTens;

        const digitTopThree = document.getElementById("year-alp-top-three");
        const digitBottomThree = document.getElementById("year-alp-bottom-three");
        digitTopThree.classList.add("flip-top");
        digitBottomThree.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopThree.classList.remove("flip-top");
            digitBottomThree.classList.remove("flip-bottom");
            yearDigitsThree[1].textContent = yearTens;
            yearDigitsThree[2].textContent = yearTens;
        }, 950);
    }
    // the year tens
    const yearOnes = Math.floor(getNowTime().nowYear % 10);

    if (yearDigitsFour[0].textContent !== yearOnes.toString()) {
        yearDigitsFour[0].textContent = yearOnes;
        yearDigitsFour[3].textContent = yearOnes;

        const digitTopFour = document.getElementById("year-alp-top-four");
        const digitBottomFour = document.getElementById("year-alp-bottom-four");
        digitTopFour.classList.add("flip-top");
        digitBottomFour.classList.add("flip-bottom");
        setTimeout(() => {
            digitTopFour.classList.remove("flip-top");
            digitBottomFour.classList.remove("flip-bottom");
            yearDigitsFour[1].textContent = yearOnes;
            yearDigitsFour[2].textContent = yearOnes;
        }, 950);
    }
}

setInterval(() => {
    updateClock();
}, 1000);

function digitSoundPlay() {
    let digitSound = new Audio("https://sounds.pond5.com/industrial-switch-light-flick-03-sound-effect-102261650_nw_prev.m4a");
    digitSound.play();
};

