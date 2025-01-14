import express from 'express';
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import user from './controller/user.js';

const app = express();
app.use(express.json());

await mongoose.connect('mongodb://127.0.0.1:27017/YT');

const Video = model('Videos', new Schema({
    title: String,
    category: String,
    description: String,
    vidURL: String,
    count: Number,
    userId: Schema.Types.ObjectId,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
        
}, {
    virtuals: {
        user: {
            options: {
                // Registruotas modelio pavadinimas mongoose objekte
                ref: 'Users',
                // Videos modelyje patalpintas laukelis
                localField: 'userId',
                // Users modelyje esanti laukelio userId reikšmė
                foreignField: '_id',
                // Pasirinkimas ar norime tik vieno priskirto įrašo:
                justOne: true
            }
        }
    },
    toJSON: {
        virtuals: true
    }
}));

app.get('/api/video', async (req, res) => {
    try {
        res.json(await Video.find().populate('user', ['channelName', 'userPhoto']));
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

app.post('/api/video', async (req, res) => {
    req.body.count=0;
    try {
        await Video.create(req.body);
        res.json('Naujas video sėkmingai pridetas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

app.get('/api/video/:id', async (req, res) => {
    try {
        res.json(await Video.findById(req.params.id));
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

app.use('/api/user', user);

app.listen(3000);