import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [data,setData]=useState([]);
    const [alert, setAlert] = useState({});

    useEffect(()=>{

        axios.get('/api/video').then(resp=>setData(resp.data)).catch(error=>setAlert({
            message:error.response.data,
            status: 'danger'
        }));
    },[]);

    return (
        <>
            <h1>Home page</h1>
            <h5>Paieska</h5>
            <form >
                <div className='input-group mb-5'>
                    <input className='form-control' type="text" placeholder='nu, rasyk kazka'/>
                    <button className='btn btn-primary'>Ieskoti</button>
                </div>
            </form>
            <div className="videosList row">
            {alert.message ? 
                    <div className={"mt-4 alert alert-" + alert.status}>
                        {alert.message}
                    </div>
                : data.map(video => {
                    let vidID = video.vidURL.split('?v=')[1];
                    return(
                        <div key={video._id} className="col-12 col-md-4">
                            <Link to={"/single-vid/" + video._id}>
                               <img src={"https://img.youtube.com/vi/" + vidID + "/maxresdefault.jpg"} />
                            </Link>
                            <Link to={"/single-vid/" + video._id}>
                                <h5>{video.title}</h5>
                            </Link>
                        </div>
                    );
                }
                    
                )}
            </div>
        </>
    );
}
export default Home;