import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

await mongoose.connect('mongodb://127.0.0.1:27017/productDB');

const Product = mongoose.model('Products', {
    brand: String,
    category: String,
    description: String,
    discountPercentage: Number,
    price: Number,
    rating: Number,
    stock: Number,
    thumbnail: String,
    title: String    
});

app.get('/api', async (req, res) => {
    try {
        res.json(await Product.find());
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
}); 

app.post('/api', async (req, res) => {
    try {
        await Product.create(req.body);
        res.json('Naujas produktas sėkmingai pridetas');
    } catch {
        res.status(500).json('Įvyko serverio klaida');
    }
});

app.listen(3000);