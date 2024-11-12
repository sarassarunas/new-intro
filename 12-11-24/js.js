console.log (`---------1--------`);

console.log(`1) ${8*4+2}`);
console.log(`2) ${8*(4+2)}`);
console.log(`3) ${48/4}`);
console.log(`4) ${3+6*2}`);

console.log (`---------2--------`);

let pirmas = 3;
let antras = 8;
console.log(`Pirmas skaicius ${pirmas}, antras - ${antras}`);
let trecias = pirmas + antras;
console.log(`Atsakymas: ${trecias}`);

console.log (`---------3--------`);

let vienas = 4;
let du = 6;
let tris = 5;
console.log(`Skaiciu suma: ${vienas} + ${du} + ${tris} = ${vienas + du + tris}`);
console.log(`Skaiciu skirtumas: ${vienas} - ${du} - ${tris} = ${vienas - du - tris}`);
console.log(`Skaiciu sandauga: ${vienas} * ${du} * ${tris} = ${vienas * du * tris}`);
console.log(`Skaiciu dalmuo: ${vienas} / ${du} / ${tris} = ${vienas / du / tris}`);

console.log (`---------4--------`);

let skaicius = 4;
let skaiciusDu = 3;

let pakeltasPenktuoju = skaicius**5;
let padidintasDuKartus = skaiciusDu*2;

console.log(`Pirmas skaicius: ${skaicius}, pakeltas ^5: ${pakeltasPenktuoju}, antras skaicius: ${skaiciusDu}, padidintas 2x: ${padidintasDuKartus}`);

console.log (`---------5--------`);

let vardas = "Sarunas";
let pavarde = "Siaudzionis";
let gimMetai = 1991;
let dabarMetai = 2024;

let amzius = dabarMetai - gimMetai;
console.log(`As esu ${vardas} ${pavarde}. Man yra ${amzius} metai(u)`);

console.log (`---------6--------`);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let randomVienas = random(0,4);
let randomDu = random(0,4);
console.log(randomVienas,randomDu);

if (randomVienas !== randomDu) {
    if (randomVienas>randomDu) {console.log(`Pirmas skaicius didesnis: ${randomVienas} / ${randomDu} = ${randomVienas/randomDu}`);} 
    else {console.log(`Antras skaicius didesnis: ${randomDu} / ${randomVienas} = ${randomDu/randomVienas}`);}      
} 
else {console.log(`Skaiciai yra lygus`);}

console.log (`---------7--------`);

let rndVienas = random(0,25);
let rndDu = random(0,25);
let rndTris = random(0,25);
console.log(rndVienas,rndDu,rndTris);

let meziausias = Math.min (rndVienas,rndDu,rndTris);
console.log (meziausias);
let didziausias = Math.max (rndVienas,rndDu,rndTris);
console.log (didziausias);

let vidSkaicius = rndVienas+rndDu+rndTris - meziausias - didziausias;
console.log (`Vidurinis skaicius = ${vidSkaicius}`);

console.log (`---------8--------`);

let nznVienas = random(0,2);
let nznDu = random(0,2);
let nznTris = random(0,2);
let nznKeturi = random(0,2);
console.log(nznVienas,nznDu,nznTris,nznKeturi);

let kiekNuliu = 0;
let kiekVienetu = 0;
let kiekDvejetu = 0;

if (nznVienas === 0) {
    kiekNuliu = kiekNuliu+1;}
    else if (nznVienas === 1) {
        kiekVienetu = kiekVienetu+1;
    }
    else if (nznVienas === 2) {
        kiekDvejetu = kiekDvejetu+1;
    }

if (nznDu === 0) {
    kiekNuliu = kiekNuliu+1;}
    else if (nznDu === 1) {
        kiekVienetu = kiekVienetu+1;
    }
    else if (nznDu === 2) {
        kiekDvejetu = kiekDvejetu+1;
    }
if (nznTris === 0) {
    kiekNuliu = kiekNuliu+1;}
    else if (nznTris === 1) {
        kiekVienetu = kiekVienetu+1;
    }
    else if (nznTris === 2) {
        kiekDvejetu = kiekDvejetu+1;
    }
if (nznKeturi === 0) {
    kiekNuliu = kiekNuliu+1;}
    else if (nznKeturi === 1) {
        kiekVienetu = kiekVienetu+1;
    }
    else if (nznKeturi === 2) {
        kiekDvejetu = kiekDvejetu+1;
    }            

console.log(`Nuliu: ${kiekNuliu}, vienetu: ${kiekVienetu}, dvejetu: ${kiekDvejetu}`);

console.log (`---------9--------`);