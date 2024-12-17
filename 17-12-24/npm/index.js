import chalk from "chalk";
// console.log(chalk.blue('Hello world!'));
// console.log(process.stdout.columns);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let eilute = ``;
let chars = ` ~!@#$%^&*()_+-09 87654 321QW ERTYUI OPLKJHG FDSAZX CVBNM `;

setInterval(() => {
    eilute=``;
    let i =0;
    while(i<process.stdout.columns ) {
        eilute+=chars[random(0,chars.length-1)]
        i++;
    }
    let rndColor=random(0,25);
    if (rndColor>0) {
        console.log(chalk.green(eilute));
    } else {
        console.log(eilute);
    }
    
//     console.log(chalk.green('Labas Pasauli').repeat(15));
}, 100);
// console.log(eilute);