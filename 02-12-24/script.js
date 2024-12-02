
let paieskos = [`What to watch`,`What is my IP`, `When is Mother's Day 2024`,`How many weeks in a year`, `How many days until Christmas`,`How to screenshot on Mac`,`What time is it`,`How many ounces in a gallon`,`When is Easter 2024`,`How many ounces in a cup`];

// console.log(paieskos);

// for (str of paieskos) {
//     console.log(str);
// }


function paieska(e) {
    let key = e.target.value;
    // let searchKey = key;
    document.querySelector(`.rezultatas`).innerHTML=``;
    // console.log(key);
    for (str of paieskos) {
        // if(str.search(new RegExp(`${key}`, 'gi'))) {
        if(key!==``) {    
            if (str.toLowerCase().includes(key.toLowerCase())) {
                    // console.log(str);
                    document.querySelector(`.rezultatas`).innerHTML+=`<p onclick="fill(event)">${str}</p>`
                }
            }
        }
}
function fill(e) {
   document.querySelector(`input`).value=e.target.innerText;
   document.querySelector(`.rezultatas`).innerHTML=``;
}