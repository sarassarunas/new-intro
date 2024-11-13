function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log(`-----------1---------`);

let vardas = 'Keanu';
let pavarde = 'Reeves';
console.log(`Aktorius: ${vardas} ${pavarde}`);
if (vardas.length < pavarde.length) {
    console.log(vardas);
} else if (vardas.length > pavarde.length) {
    console.log(pavarde);
} else {
    console.log(vardas+` `+pavarde);
}

console.log(`-----------2---------`);

console.log(`${vardas.toUpperCase()} ${pavarde.toLocaleLowerCase()}`);

console.log(`-----------3---------`);

console.log(vardas[0]+pavarde[0]);

console.log(`-----------4---------`);

console.log((vardas[vardas.length-3]+vardas[vardas.length-2]+vardas[vardas.length-1]+pavarde[pavarde.length-3]+pavarde[pavarde.length-2]+pavarde[pavarde.length-1]).toLocaleUpperCase());

console.log(`-----------5---------`);

let sakinys = `An American in Paris`;

sakinys1 = sakinys.replaceAll("A","*");
sakinys2 = sakinys1.replaceAll("a","*");

console.log(sakinys2);

console.log(`-----------6---------`);

sakinys3 = sakinys2.replaceAll("*", "");
console.log (sakinys3);
console.log(sakinys.length-sakinys3.length);

console.log(`-----------7---------`);

sakinys0 = `An American in Paris`;
sakinys2 = `Breakfast at Tiffany's`;
sakinys3 = `2001: A Space Odyssey`;
sakinys4 = `It's a Wonderful Life`;

let naujasSakinys = sakinys3.replaceAll("a","").replaceAll("A","").replaceAll("e","").replaceAll("E","").replaceAll("e","").replaceAll("i","").replaceAll("I","").replaceAll("o","").replaceAll("O","").replaceAll("y","").replaceAll("Y","").replaceAll("u","").replaceAll("U","");

console.log(naujasSakinys);

console.log(`-----------8---------`);

let starWars = `Star Wars: Episode ${random(0,5)} ${random(1,9)} - A New Hope`;

console.log(starWars);

console.log(starWars[19]+" "+starWars[21]);

console.log(`-----------9---------`);

let abecele = `abcdefghijklmnoprstuvz`;
let pirmaRaide = random(0,abecele.length-1);
let antraRaide = random(0,abecele.length-1);
let treciaRaide = random(0,abecele.length-1);

console.log(abecele[pirmaRaide]+abecele[antraRaide]+abecele[treciaRaide]);

console.log(`-----------10---------`);

sakinys = `Don't Be a Menace to South Central While Drinking Your Juice in the Hood`;
sakinys1 = `Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale`;

console.log(sakinys.split(" "));
console.log(sakinys.split(" ").length);

zodziai = sakinys.split(" ");
zodziai2 = sakinys1.split(" ");

let kiekZodziu = 0;

console.log(zodziai[0].length);

for (let i = 0;i<=sakinys.split(" ").length-1;i++){
    if (zodziai[i].length<=5) {
        kiekZodziu++;
    }
}
console.log(`Pirmam sakiny: ${kiekZodziu}`);

kiekZodziu = 0;

for (let i = 0;i<=sakinys1.split(" ").length-1;i++){
    if (zodziai2[i].length<=5) {
        kiekZodziu++;
    }
}
console.log(`Antram sakiny: ${kiekZodziu}`);