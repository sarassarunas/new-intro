import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Sveikutis Worlde')
})

app.get('/vardu-filtras', function (req, res) {
    const vardai = ['Jafymas', 'Domas', 'Katerina', 'Juozas'];

    res.json(vardai.filter(value=>value.includes(req.query.vardas)));
  })

//   app.post('/register', function (req, res) {
//     const name = req.query.name;
//     const lastName  = req.query.last_name;
//     const email = req.query.email;
//     const pass = req.query.password;
//     const regex = /\d/;
    
//     if(name && lastName && email && pass) {
        
//         if(name.length>=3 && name.length<=200) {
//             if(lastName.length>=3 && lastName.length<=200) {
//                 if(email.length>=5 && email.length<=50 ) {
//                     if(email.includes(`@`)) {
//                         if (regex.test(pass) && pass.length >=8 && pass.length<=16) {
//                             res.json(`Sveikiname sėkmingai prisiregistravus platformoje`);
//                         } else {res.json(`Slaptazodis privalo būti nuo 8 iki 16 simbolių ilgio ir tureti bent viena skaiciu`);}
//                     } else {res.json(`El. pastas neteisingo formato`);}
//                 } else {res.json(`El. pastas privalo būti nuo 5 iki 50 simbolių ilgio`);}
//             } else {res.json(`Pavarde privalo būti nuo 3 iki 200 simbolių ilgio`);}
//         } else {res.json(`Vardas privalo būti nuo 3 iki 200 simbolių ilgio`);}             
//     } else {
//         res.json(`Negauti registracijos duomenys`);
//     }
// });

app.post('/register', function (req, res) {
    const name = req.query.name;
    const lastName  = req.query.last_name;
    const email = req.query.email;
    const pass = req.query.password;
    const regex = /\d/;
    
    if(!name || !lastName || !email || !pass) {
        res.json(`Negauti registracijos duomenys`);
        return;
    }
    if(name.length<3 || name.length>200) {
        res.json(`Vardas privalo būti nuo 3 iki 200 simbolių ilgio`);
        return;
    }
    if(lastName.length<3 || lastName.length>200) {
        res.json(`Pavarde privalo būti nuo 3 iki 200 simbolių ilgio`);
        return;
    }
    if(email.length<5 || email.length>50 ) {
        res.json(`El. pastas privalo būti nuo 5 iki 50 simbolių ilgio`);
        return;
    }
    if(!email.includes(`@`)) {
        res.json(`El. pastas neteisingo formato`);
        return;
    }
    if (!regex.test(pass) || pass.length <8 || pass.length>16) {
        res.json(`Slaptazodis privalo būti nuo 8 iki 16 simbolių ilgio ir tureti bent viena skaiciu`);
        return;
    }
    res.json(`Sveikiname sėkmingai prisiregistravus platformoje`);

});

app.post('/login', function (req, res) {
    const email = req.query.email;
    const pass = req.query.password;
    const GEmail = `admin@vcs.lt`;
    const GPass = `Github12`;
    
    if(!email || !pass) {
        res.json(`Negavome jokių duomenų, bandykite dar kartą`);
        return;
    }
    if(email!==GEmail || pass!==GPass){
        res.json(`Neteisingi prisijungimo duomenys`);
        return;
    }
    res.json(`Sveikiname sėkmingai prisijungus`);
    



    // res.json(`login`)
});


app.listen(3000)
