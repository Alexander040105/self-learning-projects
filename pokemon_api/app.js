const pokemon = ["charizard", "pikachu", "mewtwo", "zekrom", "reshiram"];
let currentIndex = 0;
let userScore = 0;
const result = document.getElementById("result");
const next = document.getElementById("next");
const start = document.getElementById("start");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const retry = document.getElementById("retry");
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
    enteredPokemonName.innerText = "";
}

function fetchNextPokemon() {
    currentIndex++;
    if (currentIndex < pokemon.length) {
        startPokemon(pokemon[currentIndex]);
        userScore++;
        next.style.display = "none"; 
    } else {
        result.innerText = "Congratulations! You've completed all Pokemon.";
        next.style.display = "none"; 
    }
}

function submitPokemon() {
    let currentPokemon = pokemon[currentIndex];
    if (enteredPokemonName.value.toLowerCase() === currentPokemon) {
        result.innerText = "You are Correct";
        enteredPokemonName.value = "" ;
        pokemonType.innerText = "" ;
        next.style.display = "block";

        next.removeEventListener("click", fetchNextPokemon); 
        next.addEventListener("click", fetchNextPokemon);

        if (currentIndex === pokemon.length - 1) {
            next.style.display = "none";
            retry.style.display = "block";
            result.innerText = "Congratulations! You've completed all Pokemon. Your Score is " + userScore;
            retry.addEventListener("click", function(){
                currentIndex = 0;
                userScore = 0;
                startPokemon(pokemon[currentIndex]);
                retry.style.display = "none";
            });
        }
    } else {
        result.innerText = "You are incorrect bro";
        enteredPokemonName.value = "";
    }
}

// Initial call to start fetching Pokemon
startPokemon(pokemon[currentIndex]);

// di ko pa maayos tong hintPokemon() async na function di ko sya magawa na what if isa lang typing ng pokemon so ayorn ang fucked up
// async function hintPokemon(){
//     let currentPokemon = pokemon[currentIndex];
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
//     const data = await response.json();
    
//     const pokemonData1 = data.types[0].type.name;
//     const pokemonData2 = data.types[1].type.name;
//     console.log(data.types.length)
//     if(data.types.length === 2){
//         pokemonType.innerText = "The type of this pokemon is " + pokemonData1 + " & " + pokemonData2;
//     } else{
//         pokemonType.innerText = "The type of this pokemon is " + pokemonData1
//     }
// }






