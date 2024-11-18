function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


console.log(`--------1-------`);

for (let i=7;i<=31;i++) {
    if (i%2!==0) {
    console.log(i);
    }
}
console.log(`--------2-------`);


for (let i=1;i<=10;i++) {
    let line=``;
    for(let y=1;y<=i;y++){
        line+=y+` `;
    }
    document.write(`<span>`+line+`</span><br>`);
}
console.log(`--------3-------`);

// let stringas = `Žalgiris, Anadolu Efes, Barcelona BC`;

// // let komandos = stringas.split(`, `);

// // console.log(komandos);
// let komandosCount = 1;
// let randomKomanda = 2;

// let pradinePoz = 0;
// let pozicija = 0;
// let rezultatas = "";

// for (let i=0;i<=stringas.length;i++) {
//         if(stringas[i]===`,`){
//             komandosCount++;
//             // console.log(i);



//             if(komandosCount === randomKomanda) {
//                 for(let x = i+1; x < stringas.length; x++) {
//                     rezultatas += stringas[x];
//                     if (rezultatas[i]===`,`) {

//                         break;
//                     } 
//                     if (rezultatas[i]!==``) {
//                         rezultatas+=rezultatas
//                     }
//                 }
//             }
//         }
        
// }

// console.log(rezultatas)
    // komandosCount++;

let stringas = `Žalgiris, Anadolu Efes, Barcelona BC`;
let komandosCount = 1;
let randomKomanda = 3; // Pasirinkite atsitiktinę komandą (pvz., 1, 2, 3)
let pradinePoz = 0;
let rezultatas = "";

for (let i = 0; i <= stringas.length; i++) {
    if (stringas[i] === ',') {
        komandosCount++;
        if (komandosCount === randomKomanda) {
            pradinePoz = i + 2; // Pradedame nuo pozicijos po kablelio ir tarpo
            break;
        }
    }
}

for (let x = pradinePoz; x < stringas.length; x++) {
    if (stringas[x] === ',') {
        break;
    }
    if (stringas[x] !== ' ') {
        rezultatas += stringas[x];
    }
}

console.log(rezultatas);


// while (pradinePoz<stringas.length){
//     if(stringas[pradinePoz]===`,`) {
//         pradinePoz++;
//         if (pradinePoz===pozicija+1){}
//     }
// }










































// let komandosDar =stringas.split(", ")
// console.log(komandosDar);
// let pirma =1;
// let antra =``;
// let trecia = ``;

// let komandos =0;
// let komandosCount=0;

// for (let i=0;i<=stringas.length;i++) {
//     if(stringas[i]===`,`){
//         komandosCount++;
//         console.log(i);
//     }
    
// }

// komandosCount++;

// console.log(komandosCount);
//     let rnd = random(0,2);
//     console.log(rnd);

// let komanda=`test`;
// let komandosNr =0;

// for (let i=0;i<=stringas.length;i++) {
//     if (i===stringas.length || komandos[i]===`,`) {
//         if (komandosNr===rnd) {
//             console.log(komanda);
//             break;
//         } else {
//             komanda+=komandos[i];
//         }
//         komanda=``;
//         komandosNr++;
//         i++;
        
//     }
// }

console.log(`--------4-------`);

let skaiciusStringas = `54 77 2 59 17 19 108 21`;

let skaiciai = skaiciusStringas.split(" ");
// console.log(skaiciai[0]);

for (let i =0;i<=skaiciai.length;i++) {
    if (skaiciai[i]>1 && skaiciai[i]%skaiciai[i]===0 && skaiciai[i]%2!==0 && skaiciai[i]%3!==0) {
        console.log(skaiciai[i]);
    }
}

console.log(`--------5-------`);

let message = `gjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc`;

let zinute=``;
for(let i=7;i<=message.length-1;i+=7){
    zinute+=message[i];
}
console.log(zinute);

console.log(`--------6-------`);

let atsakymas =``;

for (let i =0;i<20;i++) {
    skaicius=random(1,50);
    
    if(!atsakymas.includes(skaicius)) 
        {
        atsakymas+=skaicius+` `;
    } else {
        i--;
    }

}
console.log(atsakymas);

console.log(`--------7-------`);

// let aukstis = 21;
// let vidurys = Math.floor(aukstis/2);
// let spalvosEilute=``;
// let spalvotas=``;
// function gautiAtsitiktineSpalva() {
//     let r=Math.floor(Math.random()*256);
//     let g=Math.floor(Math.random()*256);
//     let b=Math.floor(Math.random()*256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// for (let i=0;i<aukstis;i++) {
//         let eilute=``;
//         let spalvos=``;
//     for(let j=0;j<aukstis;j++) {
//         let virsus=Math.abs(j-vidurys)<=i && i<=vidurys;
//         console.log(virsus);
//         let apacia=i>vidurys && Math.abs(j-vidurys)<=aukstis-i-1;
//         if(virsus||apacia){
//         let spalva = gautiAtsitiktineSpalva();  

//         eilute+=`* `;
//         spalvosEilute+=`%c* `; 
//         spalvotas+=(`color:${spalva}`,``);
            

//         // document.write(`*`);
//         } else {
//             eilute+=``;
//             spalvotas+=`     `;
//             // spalvosEilute+=``;

//         }
//         console.log(eilute, ...spalvotas.trim().split(`;`).filter(Boolean));
//         document.write(eilute);
//     }
//     document.write(`<br>`)
// }

function gaukAtsitiktineSpalva() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const aukstis = 21;
const vidurys = Math.floor(aukstis / 2);
for (let i = 0; i < aukstis; i++) {
    let eilute = '';
    let spalvosArgumentai = '';
    for (let j = 0; j < aukstis; j++) {
        const virsutinePuse = Math.abs(j - vidurys) <= i && i <= vidurys;
        const apatinePuse = i > vidurys && Math.abs(j - vidurys) <= aukstis - i - 1;
        if (virsutinePuse || apatinePuse) {
            const spalva = gaukAtsitiktineSpalva();
            eilute += '%c* ';
            spalvosArgumentai += `color: ${spalva}; `;
        } else {
            eilute += '   ';
            spalvosArgumentai += '     ';
        }
    }
    // Atspausdina kiekvieną eilutę su spalvomis
    console.log(eilute, ...spalvosArgumentai.trim().split(' ; ').filter(Boolean));
    // document.write(eilute, ...spalvosArgumentai.trim().split(' ; ').filter(Boolean));
}

console.log(`--------8-------`);

stringas = "54 77 2 59 17 19 108";
let dabartinisSkaicius = "";
let didziausias = -Infinity;
let maziausias = Infinity;
for (let i = 0; i <= stringas.length; i++) {
    if (i < stringas.length && stringas[i] !== ' ') {
        dabartinisSkaicius += stringas[i];
    } else {
        let skaicius = Number(dabartinisSkaicius);
        if (skaicius > didziausias) {
            didziausias = skaicius;
        }
        if (skaicius < maziausias) {
            maziausias = skaicius;
        }
        dabartinisSkaicius = "";
    }
}
console.log("Didžiausias skaičius: " + didziausias);
console.log("Mažiausias skaičius: " + maziausias);

console.log(`--------7 vel-------`);

let krastinesAukstis = 21;
let centras = Math.round(krastinesAukstis/2); 
console.log(centras);

for(let i=0;i<krastinesAukstis;i++){
    for(let y=0;y<=krastinesAukstis;y++){
        if(i<centras){
            if (y===centras-i || y===centras+i) {
                
                document.write(`<span style="color:rgb(${random(0,255)} ${random(0,255)} ${random(0,255)})">*</span>`);
            } else {
                document.write(`&nbsp`);
            }
            
        
        
        } else if (i>centras){
            if(y===i-centras || y===i+centras) {
                document.write(`<span style="color:rgb(${random(0,255)} ${random(0,255)} ${random(0,255)})">*</span>`);
            } else {
                document.write(`&nbsp`);
            }
            
        } else {
            document.write(`<span style="color:rgb(${random(0,255)} ${random(0,255)} ${random(0,255)})">*</span>`);
        }
    }
    document.write(`<br>`);
    }        