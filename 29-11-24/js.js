console.log(`Valit`);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

document.querySelector(`.box`).addEventListener(`click`, plusPoint);

let playerPoints = 0;
let pcPoints = 0;
let box = document.querySelector(`.box`);
console.log(box);
let roundTime = 30;
document.querySelector(`.time`).innerHTML=roundTime;
document.querySelector(`.playerPoints`).innerHTML=playerPoints;
document.querySelector(`.pcPoints`).innerHTML=pcPoints;
// let area=document.querySelector(`.gameArea`);

// console.log(box);
// console.log(document.querySelector(`.gameArea`).clientHeight);
let clicked = false;

let randomPlace = setInterval(() => {
    document.querySelector(`.time`).innerHTML=roundTime;
    let maxHeight=document.querySelector(`.gameArea`).clientHeight;
    let maxWidth=document.querySelector(`.gameArea`).clientWidth;
    // console.log(document.querySelector(`.box`));
    
    document.querySelector(`.box`).style.top = random(0,maxHeight-50)+`px`;
    document.querySelector(`.box`).style.left = random(0,maxWidth-50)+`px`;
    roundTime--;
    if(!clicked) {
        pcPoints++;
        document.querySelector(`.pcPoints`).innerHTML=pcPoints;
    }
    clicked=false;
    if (roundTime<0) {
        clearInterval(randomPlace);
        document.querySelector(`.box`).removeEventListener(`click`, plusPoint);
        if (playerPoints>pcPoints) {
            document.querySelector(`.rezultatas`).innerHTML=`Laimejo zaidejas`;
        } else {
            document.querySelector(`.rezultatas`).innerHTML=`Laimejo PC`;
        }
    }
}, 1000);

function plusPoint() {
    if(!clicked) {
    playerPoints++;
    document.querySelector(`.playerPoints`).innerHTML=playerPoints;
    clicked=true;
    }

}