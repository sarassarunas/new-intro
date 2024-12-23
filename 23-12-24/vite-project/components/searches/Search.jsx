import { useState } from "react";
import ListResults from "../listResults/ListResults";



const data = [
`What to watch`,
`What is my IP`,
`When is Mother's Day 2024`,
`How many weeks in a year`,
`How many days until Christmas`,
`How to screenshot on Mac`,
`What time is it`,
`How many ounces in a gallon`,
`When is Easter 2024`,
`How many ounces in a cup`,
`What time is the Super Bowl`,
`Who won the Super Bowl 2024`,
`What time is the eclipse`,
`How to screenshot on Windows`,
`What is Juneteenth`,
`When is Easter`,
`When is the Super Bowl`,
`How to tie a tie`,
`When is Thanksgiving`,
`How old is Taylor Swift`,
`What is my IP address`,
`How many ounces in a pound`,
`What day is it`,
`When is Mother's Day`,
`How many cups in a quart`,
`How many oz in a gallon`,
`Who called me from this phone number`,
`How many quarts in a gallon`,
`When is the solar eclipse`,
`How many people are in the world`,
`When is Daylight Savings`,
`When is the next full moon`,
`How to write a check`,
`How many oz in a cup`,
`How long to boil eggs`,
`When is Father's Day`,
`Where am I`,
`How many grams in an ounce`,
`How many seconds in a day`,
`How much house can I afford`
];

let resultDummy = [];

// let [phrase, setPhrase] = useState(``);

function Search() {
    let [phrase, setPhrase] = useState(``);
    let [result, setResult] = useState([]);
    // console.log(data);
    function searchPhrase(e) {
        let resultDummy = [];
        setPhrase(e.target.value);
        
        data.map(str=> {
            
            if(phrase!==``) {    
                if (str.toLowerCase().includes(phrase.toLowerCase())) {
                        resultDummy.push(str);
                        setResult(resultDummy);
                    }
                }
            })
    }

    return (
        <>
            <h1>Pasieska</h1>
            <input type="text" onChange={searchPhrase}/>
            <div className="phrases">
                <ul>
                {result.map((text,id)=>
                <ListResults text={text} key={id}/>
                )
                }
                </ul>
                </div>
        </>
    )
}
export default Search;