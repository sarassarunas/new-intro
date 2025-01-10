import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('/api').then(resp=>setData(resp.data));
    },[]);
    
    return (
        <>
            <h1>Pagrindinis PSL</h1>
            <div className="productList">
                {data.map((item)=>
                    <div className='product' key={item._id}>
                        <h4>{item.title}</h4>
                        <img src={item.thumbnail} alt="" />
                    </div>  
                )}
            </div>
        </>
    );
}
export default Home;