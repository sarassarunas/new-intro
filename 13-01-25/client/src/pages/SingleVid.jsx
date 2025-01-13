import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SingleVid() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [alert, setAlert] = useState({});
    

    useEffect(() => {
        axios.get('/api/' + id)
        .then(resp => {
            setData(resp.data);
            
            
        })
        // Bet kuriuo kitu gautu statuso kodu:
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }, []);

    
    return (
        <>
            <h1>Single Video page</h1>
            {
                alert.message?
                <div className={"mt-4 alert alert-" + alert.status}>
                    {alert.message}
                </div>:
                <>
                    {data.title&&
                    <>
                    <h2>{data.title}</h2>
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+data.vidURL.split('?v=')[1]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    </>}
                    
                </>
            }
        </>
    );
}
export default SingleVid;