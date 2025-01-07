import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [data,setData] = useState([]);
    const [searchName,setSearchName] = useState(``);
    const inputText = useRef();

    function search(e) {
        e.preventDefault();
        setSearchName(inputText.current.value);
                
    }

    useEffect(() => {
        if(searchName==='') 
            return;
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`).then(
            resp=>resp.json()).then(resp=>{
                setData(resp.drinks);
            });
    }, [searchName]);

    return(
        <>
            <form onSubmit={search} className="input-group my-5">
                <input type="text" className="form-control" ref={inputText} placeholder="Enter cocktail name"/>
                <button className="btn btn-primary">Search</button>
            </form>
            <h1>Cocktails:</h1>
            <div className="d-flex flex-wrap gap-3" style={{maxWidth: 1200}}>
                {data.map((value, idx)=>
                    <div key={idx} className="coctail" style={{maxWidth:350}}>
                        <div><img src={value.strDrinkThumb} alt="" /></div>
                        <Link to={"/single-item/"+value.idDrink}> <h3>{value.strDrink}</h3> </Link>
                    </div>
                )}
            </div>
        </>
    );
}
export default Home;