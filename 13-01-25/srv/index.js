import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

await mongoose.connect('mongodb://127.0.0.1:27017/YT');

const Video = mongoose.model('videos', {
    title: String,
    category: String,
    description: String,
    vidURL: String,
    count: Number 
        
});

app.get('/api', async (req, res) => {
    try {
        res.json(await Video.find());
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

app.post('/api', async (req, res) => {
    req.body.count=0;
    try {
        await Video.create(req.body);
        res.json('Naujas produktas sėkmingai pridetas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

app.listen(3000);