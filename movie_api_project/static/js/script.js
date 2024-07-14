const userSearch = document.getElementById("searchBar");
const buttonSearch = document.getElementById("searchButton");

async function getMovies(){
    const apiKey = '59047198';
    let searchValue = userSearch.value.trim();

    //used to convert the spaces with + ie: hotdog vendor will be printed as 'hotdog+vendor'
    let processedData = searchValue.replace(/ /g, '+')

    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${processedData}`);
    const data = await response.json();

    console.log(data);
}