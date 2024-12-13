
let searchPhrase = ``;
let page = 1;
let totalPages = 0;
let lastTimeSearch = [{movie:``,page:0}];
console.log(lastTimeSearch);
// lastTimeSearch=JSON.parse(localStorage.getItem(`lastEvent`));



function search(e) {
    e.preventDefault();
    // page = 1;
    searchPhrase = document.querySelector(`input`).value;
    render();
    
}
function addToStorage () {
    
    console.log(`veikia add to storage`)
    // if(lastTimeSearch[0].movie.length>0) {
    //     page = lastTimeSearch[0].page;
    //     searchPhrase = lastTimeSearch[0].movie;
    //     document.querySelector(`input`).value=searchPhrase;
    //     render();
    // }
        // lastTimeSearch[0].movie=searchPhrase;
        // lastTimeSearch[0].page=page;
        // console.log(lastTimeSearch);
        // localStorage.setItem(`lastEvent`,JSON.stringify(lastTimeSearch));

}
function render() {
    // console.log(`veikia?`);
    // console.log(searchPhrase);
    fetch(`https://www.omdbapi.com/?apikey=5343f40a&s=${searchPhrase}&page=${page}`).then(res=>res.json()).then(res=>{
        let pages = Math.floor(res.totalResults/10);
        let lastPageItems= res.totalResults%10;
        totalPages= lastPageItems===0?pages:pages+1;
        console.log(res);
        console.log(pages,lastPageItems,totalPages);
        document.querySelector(`.currentPage`).innerHTML=page;
        document.querySelector(`.totalPages`).innerHTML=`Total: ${totalPages}`;
        document.querySelector(`.results`).innerHTML=res.Search.map(movie=>
            `
                <div class="movie col-3">
                    <img src="${movie.Poster}">
                    <h4>${movie.Title}</h4>
                    <span>${movie.Year}</span>
                </div>
            `
        ).join(``);
   
    });
    addToStorage();
    // https://www.omdbapi.com/?apikey=5343f40a&i=tt1285016
    // https://www.omdbapi.com/?apikey=5343f40a&s=batman
    // https://www.omdbapi.com/?apikey=5343f40a&s=batman&page=1
}
function prevPage() {
    if (page===1) {
        return;
    } else {
    page--;
    render();
    }
}
function nextPage() {
    if(page===totalPages) {
        return;
    } else {
    page++;
    render();
    }
}
function cleanStorage() {
    localStorage.removeItem(`lastEvent`);
    location.reload();
}
