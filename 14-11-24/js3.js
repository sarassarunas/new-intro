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

// let piesinys = ``;
let krastinesIlgis = 51;
// let eilute = ``;

// for (i=1;i<=krastinesIlgis;i++) {
//     piesinys+=`*`;   
// }
// // console.log(piesinys);
// for(i=1;i<=krastinesIlgis;i++) {
//     document.write(piesinys+`<br>`);
//     // console.log(piesinys);
    
// } 
console.log(`-----------9---------`);
document.write(`<h1>-----------8/9---------</h1>`);  
for (let eilute =1;eilute<=krastinesIlgis;eilute++) {
    for(let stulpelis=1;stulpelis<=krastinesIlgis;stulpelis++){
        if (stulpelis===eilute || stulpelis ===krastinesIlgis-eilute+1){
            document.write(`5`);
        }else {document.write(`*`);}
        
    }

    document.write(`<br>`);

}

// document.write(piesinys+eilute);

console.log(`-----------9/fail---------`);

// dont know
// piesinys = ``;
// krastinesIlgis = 25;
// // eilute = ``;

// for (i=1;i<=krastinesIlgis;i++) {
//     piesinys+=`*`;   
// }
// // console.log(piesinys);
// for(i=1;i<=krastinesIlgis;i++) {
//     eilute = piesinys+`<br>`;
//     document.write(eilute.replace("*","5"));
//     console.log(eilute);
    
// } 
// (/#|_/g, '')

console.log(`-----------10---------`);

let monetosHerbas = 0;
let monetosSkaicius = 1;
let metam = true;
let rezultatas=``;

while (metam) {
    let metimas = random(0,1);
    if(metimas === 0) {

        rezultatas +=metimas;
        
        metam = false;
    } else {
        rezultatas+=metimas;
    }
}
console.log(`-----------a---------`);
console.log(rezultatas.replaceAll(0,`H`).replaceAll(1,`S`));

rezultatas=``;
let counter = 0;

while (counter<3) {
    let metimas = random(0,1);
    rezultatas +=metimas;
    if(metimas === 0) {
        counter++;
        

    } else {
        rezultatas+=metimas;
        
    }
}
console.log(`-----------b---------`);
console.log(rezultatas.replaceAll(0,`H`).replaceAll(1,`S`));

rezultatas=``;

while (rezultatas.match(`000`)===null) {
    let metimas = random(0,1);
    rezultatas +=metimas;
    
}
console.log(`-----------C---------`);
console.log(rezultatas.replaceAll(0,`H`).replaceAll(1,`S`));

console.log(`-----------11---------`);

let pirmoTaskai = 0;
let antroTaskai = 0;
rezultatas = ``;
counter = 0;

while (pirmoTaskai<=222 && antroTaskai<=222) {
    let kazioTaskai = random(5,25);
    let petroTaskai = random(10,20);
    pirmoTaskai+=petroTaskai;
    antroTaskai+=kazioTaskai;
    counter++;
    // console.log(pirmoTaskai,antroTaskai);
    if (kazioTaskai>petroTaskai) {
        // console.log(`Partija laimejo: Kazys, surinko ${kazioTaskai}`);
        rezultatas+=`${counter} Partija laimejo: Kazys, surinko ${kazioTaskai}. `;
    } else if (kazioTaskai<petroTaskai) {
        // console.log(`Partija laimejo: Petras, surinko ${petroTaskai}`);
        rezultatas+=`${counter} Partija laimejo: Petras, surinko ${petroTaskai}. `;
    } else {
        // console.log(`Partija baigesi lygiosiomis: surinko po ${petroTaskai}`);
        rezultatas+=`${counter} Partija baigesi lygiosiomis: surinko po ${petroTaskai}. `;
    }
    // console.log(rezultatas);
}
console.log(rezultatas);
if (pirmoTaskai>antroTaskai) {
    console.log(`Zaidima laimejo: Petras. Surinko ${pirmoTaskai}. Viso partiju: ${counter}`);
} else if (pirmoTaskai<antroTaskai) {
    console.log(`Zaidima laimejo: Kazys. Surinko ${antroTaskai}. Viso partiju: ${counter}`);
} else {
    console.log(`Lygiosios?. Viso partiju: ${counter}`)
}

console.log(`-----------12---------`);

let viniesIlgis = 85;
let sulindo = 0;
let viniuKiekis = 5;
let kiekIkalta = 0;

// let silpnasSmugis = random (0.05, 0.2);
// let stiprusSmugis = random (0.2,0.3);
counter = 0;

console.log(`-----------a---------`);

for (let ikalta=0;ikalta<viniuKiekis;ikalta++) {
        sulindo = 0;
    while(sulindo<viniesIlgis) {
        let silpnasSmugis = random (5, 20);
        sulindo+=silpnasSmugis;
        counter++;
        console.log(sulindo);
    }
    kiekIkalta++;
    console.log(kiekIkalta);
}    
console.log(counter);

console.log(`-----------b---------`);

kiekIkalta = 0;

for (let ikalta=0;ikalta<viniuKiekis;ikalta++) {
        sulindo = 0;

    while(sulindo<viniesIlgis) {
        arPataike = random(0,1);
        console.log(arPataike);
        if (arPataike===1) {
        let stiprusSmugis = random (20, 30);
        sulindo+=stiprusSmugis;
        counter++;
        console.log(sulindo);
        } else {
            counter++;
        }
    }
    kiekIkalta++;
    console.log(kiekIkalta);
}    
console.log(counter);

