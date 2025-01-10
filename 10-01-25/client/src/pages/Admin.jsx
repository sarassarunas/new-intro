import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

function Admin() {

    function addNewProduct(e) {
        e.preventDefault();
        const data = extractFormData(e.target);
        axios.post('/api', data);
    }


    return(
        <>
            <h1 className='my-5'>Administracinis PSL - prideti nauja produkta</h1>
            <form onSubmit={addNewProduct}>
                <div className='my-2'>
                    <input className="form-control" type="text" placeholder="Pavadinimas" name="title" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="text" placeholder="Gamintojas" name="brand" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="text" placeholder="Kategorija" name="category" required/>
                </div>
                <div className='my-2'>
                    <textarea className="form-control" type="text" placeholder="Aprasymas" name="description" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="number" placeholder="Nuolaida %" name="discountPercentage" step="any" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="number" placeholder="Kaina" name="price" step="any" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="number" placeholder="Reitingas" name="rating" step="any" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="number" placeholder="Kiekis sandelyje" name="stock" required/>
                </div>
                <div className='my-2'>
                    <input className="form-control" type="text" placeholder="Nuotraukos nuoroda" name="thumbnail" required/>
                </div>
                <div className='my-2'>
                    <button className="btn btn-primary">Ikelti producta</button>
                </div>
            </form>
        </>
    );
}
export default Admin;