console.log(`veikia`);

const pirkiniai = [];
let display = document.querySelector(`.items`);

function addItem(e) {
    display.innerHTML=``;
    const naujaPreke = document.querySelector(`input`).value;
    if (naujaPreke!=='') {
    pirkiniai.push(naujaPreke);
    }
    console.log(pirkiniai);
    document.querySelector(`input`).value = ``;
    
    for(item of pirkiniai) {
        display.innerHTML+=`<li>${item}</li>`
    }

}
