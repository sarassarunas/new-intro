import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { Schema, model } from 'mongoose';

const app = express();
app.use(express.json());

let data = {};

const TestFile = model('Files', new Schema({
    name:String,
    lastName:String,
    fileName:String,
    createdAt: {
        type: Date,
        // Dabartinė data ir laikas priskiriamas pagal nutylėjimą:
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}));

app.get('/api', async (req, res) => {
    try {
        res.json(`veikia?`);
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, './uploads');
    },
    filename: function (req, file, next) { 
        next(null, Date.now() + '.jpg');
    }
});

const upload = multer({ storage: storage });


app.post('/api', upload.single('file'), async (req, res) => {
    // req.file savybėje nugula persiųsto failo, kuris jau buvo išsaugotas, duomenys
    console.log(req.file);
    console.log(req.body);
    data = req.body;
    data.fileName = req.file.filename;
    console.log(data);
    try {
        await TestFile.create(data);
        res.json('POST metodu duomenys gauti');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
    
});




try {
    await mongoose.connect('mongodb://127.0.0.1/file');  

    app.listen(3000);   

    console.log('Sėkmingai prisijungta prie duomenų bazės');
} catch {
    console.log('Nepavyko prisijungti prie duomenų bazės');
}