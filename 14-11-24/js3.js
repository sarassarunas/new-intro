document.write(`<h1>Hello</h1>`);

console.log(`-----------1---------`);

for (let i=0;i<10;i++){
    console.log(`Labas`);
}

console.log(`-----------2---------`);

for (let i=0;i<10;i++) {
    console.log(i);
}

console.log(`-----------3---------`);

for(i=10;i<=50;i+=2) {
    console.log(i);
}

console.log(`-----------4---------`);

for(i=10;i<=50;i+=2) {
    if(i%10!==0) {
        console.log(i);
    }
    
}

console.log(`-----------5---------`);

let kartai = 0;

for (i=0;i<=20;i++) {
    
    if(i%2===0) {
        kartai++;
    }
}
console.log(`Kiek kartu i reiksme buvo lygine: ${kartai}`);

console.log(`-----------6---------`);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let skaicius = 0;
let atsakymas = ``;
let naujasSkaicius = ``;
kartai = 0;

for(i=0;i<300;i++) {
    skaicius = random(0,300);
    // naujasSkaicius = skaicius+"-";
    // console.log(skaicius);
    if (skaicius>275) {
        naujasSkaicius=`[`+skaicius+`]`+`-`;
    } else {
        naujasSkaicius = skaicius+`-`;
    }
    atsakymas = atsakymas + naujasSkaicius;
    if(skaicius>150) {
        kartai++; 
    }
    // atsakymas = skaicius;
    // naujasSkaicius = atsakymas;
}

    
console.log(atsakymas);
// console.log(atsakymas);
console.log(`Kiek kartu buvo didesni nei 150:`+kartai);

console.log(`-----------7---------`);

skaicius = 0;
atsakymas = ``;
for (i=1;i<=3000;i++) {
    if(i%77===0){
        atsakymas=atsakymas+i+`, `;
    }
    
}
console.log(atsakymas.slice(0, -2));

console.log(`-----------8---------`);

let piesinys = ``;
let krastinesIlgis = 25;
let eilute = ``;

for (i=1;i<=krastinesIlgis;i++) {
    piesinys+=`*`;
    
}
// for(i=1;i<=krastinesIlgis;i++) {
//     eilute=piesinys+`<br>`;
// } 
  

document.write(piesinys+eilute);

console.log(`-----------9---------`);

// dont know

console.log(`-----------10---------`);

let monetosHerbas = 0;
let monetosSkaicius = 1;
let metimas = 0;


// while ()

