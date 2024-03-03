// fetch("https://pokeapi.co/api/v2/pokemon/gyarados")
// .then(response =>{
//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error(error));


async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const pokeSprite = document.getElementById("pokemonSprite");

        pokeSprite.src = pokemonSprite;
        pokeSprite.style.display = "block";
    }
    catch(error){
        console.error(error)
    }
}


const pokemon = ["charizard","pikachu", "reshiram", "mewtwo"]
let currentIndex = 0;

async function questions(pokemons){
    let currentPokemon = pokemon[currentIndex];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);

    if (!response.ok) {
        throw new Error(`Could not fetch resource for ${pokemons[i]}`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const pokeSprite = document.getElementById("pokemonSprite");
    const result = document.getElementById("result");
    const next = document.getElementById("next");
    const start = document.getElementById("start");
    pokeSprite.src = pokemonSprite;
    pokeSprite.style.display = "block";
    result.innerText = "";
    pokemonName.innerText = "";

    pokemonName.addEventListener("click", function(){
        start.innerText = "Submit"
    });

    
    if (pokemonName.value.toLowerCase() === currentPokemon) {
        result.innerText = "You are Correct";
        next.style.display = "flex";

        next.addEventListener("click", function(){
            currentIndex++;
            result.innerText = "";
            pokemonName.value = "" ;
            questions(pokemon);
        });
    } else if (pokemon.value !== currentPokemon){
        result.innerText = "You are incorrect bro";
        pokemonName.value = "";
    }
}

// async function questions(pokemons) {
//     for (let i = 0; i < pokemons.length; i++) {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons[i]}`);

//         if (!response.ok) {
//             throw new Error(`Could not fetch resource for ${pokemons[i]}`);
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const pokeSprite = document.getElementById("pokemonSprite");
//         const result = document.getElementById("result");
//         pokeSprite.src = pokemonSprite;
//         pokeSprite.style.display = "block";

//         if (pokemonName.value.toLowerCase() === pokemons[i]) {
//             result.innerText = "You are Correct"
//         }
//     }
// }



