console.log(`HaHa`);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// let rez=[];

// for (let i=0;i<9;i++) {
//     let rnd=random(0,1);
//     rez.push(rnd);
//     let location=document.querySelector('.container');
//     if (rnd===0) {
//         location.innerHTML+=`<div>0</div>`;
//     }   else {
//         location.innerHTML+=`<div>X</div>`;
//     }
// }
// console.log(rez);
// if (rez[0]===0 && rez[1]===0 && rez[2]===0) {
//     console.log(`laimejo Nuliukai`);
// } else if (rez[3]===0 && rez[4]===0 && rez[5]===0) {
//     console.log(`laimejo Nuliukai`);
// }   else if (rez[6]===0 && rez[7]===0 && rez[8]===0) {
//         console.log(`laimejo Nuliukai`);
// }   else if (rez[0]===0 && rez[4]===0 && rez[8]===0) {
//     console.log(`laimejo Nuliukai`);
// }   else if (rez[2]===0 && rez[4]===0 && rez[6]===0) {
//     console.log(`laimejo Nuliukai`);
// }   else if (rez[0]===0 && rez[3]===0 && rez[6]===0) {
//     console.log(`laimejo Nuliukai`);
// }   else if (rez[1]===0 && rez[4]===0 && rez[7]===0) {
//     console.log(`laimejo Nuliukai`);
// }   else if (rez[2]===0 && rez[5]===0 && rez[8]===0) {
//     console.log(`laimejo Nuliukai`);
// }

let pozicijos = 9;
let rezultatas = [];
let nuliukai = [];
let kriziukai = [];
let galimosPoz = [0,1,2,3,4,5,6,7,8];
let velRez = [];


// console.log(galimosPoz);
// galimosPoz.splice(3,1);
// console.log(galimosPoz);

for (let i=0;i<pozicijos;i++) {
    let pozicija=random(0,galimosPoz.length-1);
    rezultatas.push(galimosPoz[pozicija]);
    galimosPoz.splice(pozicija,1);
    console.log(pozicija);
    console.log(galimosPoz);

}
console.log(rezultatas);
for(let i =0;i<rezultatas.length;i++) {
    if(i%2===0) {
    velRez[rezultatas[i]]=0;
    } else {
        velRez[rezultatas[i]]=1;
    }
}
console.log(velRez);

for(let i=0;i<velRez.length;i++) {
    document.querySelector('.container').innerHTML+=`<div>${velRez[i]===0 ?`O`:`X`}</div>`
}