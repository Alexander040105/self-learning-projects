const pokemon = ["charizard", "pikachu", "mewtwo", "zekrom", "reshiram"];
let currentIndex = 0;
const result = document.getElementById("result");
const next = document.getElementById("next");
const start = document.getElementById("start");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const pokemonType = document.getElementById("pokemonType");

async function startPokemon(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        throw new Error(`Could not fetch resource for ${pokemonName}`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    console.log(data.name);
    const pokeSprite = document.getElementById("pokemonSprite");

    pokeSprite.src = pokemonSprite;
    pokeSprite.style.display = "block";
    result.innerText = "";
    pokemonName.innerText = "";
}

function fetchNextPokemon() {
    currentIndex++;
    if (currentIndex < pokemon.length) {
        startPokemon(pokemon[currentIndex]);
        next.style.display = "none"; 
    } else {
        result.innerText = "Congratulations! You've completed all Pokemon.";
        next.style.display = "none"; 
    }
}

function submitPokemon() {
    let currentPokemon = pokemon[currentIndex];
    if (pokemonName.value.toLowerCase() === currentPokemon) {
        result.innerText = "You are Correct";
        pokemonName.value = "" ;
        pokemonType.innerText = "" ;
        next.style.display = "flex";

        next.removeEventListener("click", fetchNextPokemon); 
        next.addEventListener("click", fetchNextPokemon);

        // Additional check for the last Pokemon
        if (currentIndex === pokemon.length - 1) {
            next.style.display = "none";
        }
    } else {
        result.innerText = "You are incorrect bro";
        pokemonName.value = "";
    }
}

// Initial call to start fetching Pokemon
startPokemon(pokemon[currentIndex]);


async function hintPokemon(){
    let currentPokemon = pokemon[currentIndex];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
    const data = await response.json();
    
    const pokemonData1 = data.types[0].type.name;
    const pokemonData2 = data.types[1].type.name;
    console.log(data.types.length)
    if(data.types.length === 2){
        pokemonType.innerText = "The type of this pokemon is " + pokemonData1 + " & " + pokemonData2;
    } else{
        pokemonType.innerText = "The type of this pokemon is " + pokemonData1
    }
}






