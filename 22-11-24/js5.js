console.log(`------------1-----------`);

const augalai=[`lelija`,`gvazdikas`,`aljosius`,`roze`,`tulpe`,`krokai`,`usas`,`kaktusas`,`piene`,`kriause`,`labaiIlgasPavadinimas`];

console.log(augalai);

console.log(`------------2-----------`);

for (let i=0;i<augalai.length;i++) {
    console.log(augalai[i]);
}

console.log(`------------3-----------`);

for (let i=augalai.length-1;i>=0;i--) {
    console.log(augalai[i]);
}

console.log(`------------4-----------`);

let maziau5 = 0;
let maziau7 = 0;

for (let i=0;i<augalai.length;i++) {
    // console.log(augalai[i]);
    if(augalai[i].length<5) {
        maziau5++;
    };
    if(augalai[i].length<7) {
        maziau7++;
    };
}
console.log(`Pavadinimai trumpesni nei 5 simboliai: ${maziau5}`);
console.log(`Pavadinimai trumpesni nei 7 simboliai: ${maziau7}`);

console.log(`------------5-----------`);

let counter=0;

for (let i=0;i<augalai.length;i++) {
    // console.log(augalai[i]);
    if(augalai[i].length>5 && augalai[i].length<10) {
        counter++;
        console.log(augalai[i]);
        console.log(augalai[i].length);
    }
}
console.log(`Pavadinimai kuriu ilgis > 5,bet < 10: ${counter}`);

console.log(`--------Sunkesnes-------`);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log(`------------1-----------`);

let skaiciai = [];

for (let i=0;i<30;i++) {
    skaiciai[i]=random(5,25);
}
console.log(skaiciai);

console.log(`------------2-----------`);
console.log(`------------a-----------`);

counter=0;

for(let i=0;i<skaiciai.length;i++) {
    if (skaiciai[i]>10) {
        counter++;
    }
}
console.log(`skaiciu didesniu nei 10: ${counter}`);

console.log(`------------b-----------`);

let maxSkaicius = Math.max(...skaiciai);
counter = 0;
pozicijos =``;

console.log(maxSkaicius);
for(let i=0;i<skaiciai.length;i++) {
    if (skaiciai[i]===maxSkaicius) {
        counter++;
        pozicijos+=`${i} `
       
    }
}
console.log(`Didziausias skaicius: ${maxSkaicius}, masyve ju yra: ${counter}, pozicijos: ${pozicijos}`);

console.log(`------------c-----------`);

let atsakymas =0;

for(let i=0;i<skaiciai.length;i+=2) {
    atsakymas+=skaiciai[i];
}
console.log(atsakymas);

console.log(`------------d-----------`);

let naujasSkaiciai = [];

for(let i=0;i<skaiciai.length;i++) {
    naujasSkaiciai[i]=skaiciai[i]-i;
}
console.log(naujasSkaiciai);

console.log(`------------e-----------`);

let papildytasSkaiciai=naujasSkaiciai;

for(i=0;i<10;i++) {
    papildytasSkaiciai.push(random(5,25));
}
console.log(papildytasSkaiciai);

console.log(`------------f-----------`);

let poriniaiSkaiciai = [];
let neporiniaiSkaiciai = [];

for(let i=0;i<papildytasSkaiciai.length;i++) {
    if(i%2===0) {
        // poriniaiSkaiciai+=poriniaiSkaiciai.push(papildytasSkaiciai[i]);
        poriniaiSkaiciai.push(papildytasSkaiciai[i]);
    } else {
        neporiniaiSkaiciai.push(papildytasSkaiciai[i]);
    }
}
console.log(poriniaiSkaiciai);
console.log(neporiniaiSkaiciai);

console.log(`------------g-----------`);

