const readline = require('node:readline/promises');

async function logIn() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const goodMail = `admin@vcs.lt`;
    const goodPsw = `Github12`;

    const email = await rl.question('Įveskite savo el. pasto adresa:');
    const slaptazodis = await rl.question('Įveskite savo slaptazodi:');

    if(email ===`` || slaptazodis ===``) {
        console.log(`Negavome jokių duomenų, bandykite dar kartą`);
        rl.close();
        logIn();
    } else if (!email.includes(`@`)) {
        console.log(`El. pašto adresas yra netinkamo formato`);
        rl.close();
        logIn();
    } else if (email !==goodMail || slaptazodis!==goodPsw) {
        console.log(`Neteisingi prisijungimo duomenys`);
        rl.close();
        logIn();
    } else if (email===goodMail && slaptazodis===goodPsw) {
        console.log(`Sveikiname sėkmingai prisijungus`);
        rl.close();
    } else {
        console.log(`Ivyko nenumatyta klaida`);
        rl.close();
    }   
}

logIn();
