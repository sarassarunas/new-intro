import express from 'express';
import mongoose from 'mongoose';

const app = express();

await mongoose.connect('mongodb://127.0.0.1:27017/pirma_duombaze');

const Product = mongoose.model('Products', { name: String, description: String, category: String, thumbnail: String, price: Number, discount_percentage: Number, stock: Number, rating: Number });

app.use(express.json());

app.post('/', async (req, res) => {
    await Product.create(req.body); 
    res.json('Pridetas naujas produktas');
});

app.get('/', async (req, res) => {
    const allProducts = await Product.find(); 
    res.json(allProducts);
});

app.put('/:id', async (req, res) => {
    await Posts.findByIdAndUpdate(req.params.id, req.body); 
    res.json('Irasas sekmingai atnaujintas');
});

app.delete('/:id', async (req, res) => {
    await Posts.findByIdAndDelete(req.params.id); 
    res.json('Irasas sekmingai istrintas');
});

app.listen(3000);

