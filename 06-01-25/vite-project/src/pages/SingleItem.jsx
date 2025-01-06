import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SingleItem() {

    const {id} = useParams();
    const [data,setData] = useState([]);
    
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id).then(
            resp=>resp.json()).then(resp=>{
                setData(resp.drinks);
                
            });
    }, []);

    let ingridients = [];
    let values = {};
    if(data[0]) {
    for(let i=1;i<=15;i++) {
        if(data[0][`strIngredient${i}`]) {
            console.log(data[0][`strIngredient${i}`]);
            // values[data[0][`strIngredient${i}`]]=data[0][`strMeasure${i}`];
            ingridients.push(`${data[0][`strIngredient${i}`]} : ${data[0][`strMeasure${i}`]}`);
        }
    }}
    console.log(ingridients)


    return(
        <>  
            {data[0]?
                <>
                <h1>{data[0].strDrink}</h1>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src={data[0].strDrinkThumb} alt="" />
                        </div>
                        <div className="col-12 col-md-4">
                            <h5>How to make it:</h5>
                            <p>{data[0].strInstructions}</p>
                            <h5>Category:</h5>
                            <p>{data[0].strCategory}</p>
                            <h5>Type:</h5>
                            <p>{data[0].strAlcoholic}</p>
                            <h5>Glass:</h5>
                            <p>{data[0].strGlass}</p>
                            <h5>Ingridients:</h5>
                            <p>
                            {ingridients.map((items, id)=>
                                
                                    <li key={id}>{items}</li>
                                
                            )}
                            </p>
                        </div>
                    </div>
                </>
            :
            <h1>Nothing</h1>
            }
        </>
    );
}
export default SingleItem;