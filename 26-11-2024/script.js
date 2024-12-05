let eilute=``;
for(const produktas of produktai.products) {
    eilute+= `
        <tr data-id="${produktas.id}">
            <td><div class="imgContainer">
                ${produktas.discountPercentage===0 ? `<img src="${produktas.thumbnail}">` : `<img src="`+produktas.thumbnail+`"><div class="displayDiscount">- `+produktas.discountPercentage+` %</div>`}    
            
            </div></td>
            <td><div class="aprasymasContainer">
                <div class="title">
                    <a href="">${produktas.title}</a>
                </div>
                <div class="rating">
                    <div class="active" style="width:${produktas.rating*20}%">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="inActive">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>     
                    
                </div>
                <div class="aprasymas">
                    ${produktas.description}
                </div>
            </div></td>
            <td>
            <div class="kainos">
            ${produktas.discountPercentage===0 ? `<div class="price">$ `+produktas.price+`</div>` : `<div class="price priceWithDiscount">$ `+((Math.round(produktas.price*((100-produktas.discountPercentage)/100)*100))/100).toFixed(2)+`</div><div class="price oldPrice">$ `+produktas.price+`</div>`}
            </div>
            <div class="toBuy">
                <button class="addToCart" onclick="addToCart(event)">Add to Cart</button>
            </div>
            </td>
        </tr>
    `
};
document.querySelector(`table tbody`).innerHTML=eilute;

function toCartPage() {
    document.querySelector(`.productList`).style.display = `none`;
    document.querySelector(`.shopingCart`).style.display = `block`;
}
function toProductPage() {
    document.querySelector(`.productList`).style.display = `block`;
    document.querySelector(`.shopingCart`).style.display = `none`;
}

const toBuy = [];

// console.log(produktai.products[2].title);

function addToCart(e) {
    let id=+e.target.parentElement.parentElement.parentElement.dataset.id;
    let qty = 1;
    
    toBuy.push({id: id, qty: qty});
    console.log(toBuy);
    display();
    // console.log(toBuy[0][`id`]);
}

let renderPlace = document.querySelector(`.shopingCart`);
console.log(renderPlace);

function display() {
    renderPlace.innerHTML=`haloo`;
    for(let item in toBuy) {
    let index = produktai.products.findIndex(x => x.id ===toBuy[item][`id`]);
    console.log(index);
    }
    

}