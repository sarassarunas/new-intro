let eilute=``;
for(const produktas of produktai.products) {
    eilute+= `
        <tr>
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
                <button>Add to Cart</button>
            </div>
            </td>
        </tr>
    `
};
document.querySelector(`table tbody`).innerHTML=eilute;