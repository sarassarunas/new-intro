console.log(`veikia`);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function pakeistiSpalva() {
    let spalva = document.querySelector(`.fonoSpalva`).textContent;
    document.querySelector(`body`).style.backgroundColor = `${spalva}`;
}

let mygtukas = document.querySelector(`.fonoSpalva`).addEventListener(`click`, pakeistiSpalva);


function pridetiSkaiciu() {
    let value = +document.querySelector(`.skaicius`).textContent;
    document.querySelector(`.skaicius`).textContent=value+1;
}
document.querySelector(`.skaicius`).addEventListener(`click`, pridetiSkaiciu);

document.querySelector(`.box`).addEventListener(`click`, pakeistiPoz);

function pakeistiPoz() {
    let maxHeight = document.querySelector(`.randomBox`).clientHeight;
    let maxWidth = document.querySelector(`.randomBox`).clientWidth;

    document.querySelector(`.box`).style.top = `${random(0,maxHeight-50)}px`;
    document.querySelector(`.box`).style.left = `${random(0,maxWidth-50)}px`;
}

function setSpalva() {
    let spalva = document.querySelector(`.ivesta input`).value;
    document.querySelector(`body`).style.backgroundColor = `${spalva}`;
}
document.querySelector(`.setColor`).addEventListener(`click`, setSpalva);

document.querySelector(`.ridenti`).addEventListener(`click`, naujasKamuoliukas);



function naujasKamuoliukas() {
    //let rezultatas = ``;
    console.log(`veikia kamuoliukas`);
    let kamuoliukas = random(0,100);
    //rezultatas+=`<span>${kamuoliukas}</span>`;
    let color=``;
    let txtColor=``;
    if(kamuoliukas<20) {
        color=`black`;
        txtColor=`white`;
    } else if (kamuoliukas>=20 && kamuoliukas<40) {
        color=`yellow`;
        txtColor=`black`;
    } else if (kamuoliukas>=40 && kamuoliukas<60) {
        color=`red`;
        txtColor=`black`;
    } else if (kamuoliukas>=60 && kamuoliukas<80){
        color=`blue`;
        txtColor=`white`;
    } else {color=`green`; txtColor=`black`;}
    let rezultatas = `<span style="background-color:${color};color:${txtColor};">${kamuoliukas}</span>`;
    document.querySelector(`.rezultatas`).innerHTML+=rezultatas;
}
