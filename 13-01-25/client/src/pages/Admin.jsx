import { extractFormData } from '../helpers/util.js';
import axios from 'axios';
import { useState } from 'react';

function Admin() {
    const [alert,setAlert] = useState({});

    function Ikelti(e) {
        
        e.preventDefault();
        const data = extractFormData(e.target);
        axios.post('/api', data).then(resp=>{
            setAlert({
                message:resp.data,
                status: 'success'
            });}
        ).catch(error => setAlert({
            message: error.response.data,
            status:'danger'
        }));

    }

    return (
        <>
            <h1>Admin page</h1>
            <h5>Naujo video pridejimas</h5>
            {alert.message && 
                <div className={"mt-4 alert alert-" + alert.status}>
                    {alert.message}
                </div>
            }
            <form onSubmit={Ikelti}>
                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Iveskite video pavadinima" name="title" required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Iveskite kategorijos pavadinima" name="category" required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" type="text" placeholder="Iveskite video aprasyma" name="description" required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Iveskite YT nuoroda" name="vidURL" required />
                </div>
                <div>
                    <button className="btn btn-primary">Ikelti</button>
                </div>
            </form>
        </>
    );
}
export default Admin;