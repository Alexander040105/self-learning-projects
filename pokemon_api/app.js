const pokemon = ["zacian","rillaboom","greninja","charizard", "pikachu", "mewtwo", "zekrom", "reshiram", "bulbasaur", "charmander"];
let currentIndex = 0;
let userScore = 0;
const result = document.getElementById("result");
const next = document.getElementById("next");
const start = document.getElementById("start");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const retry = document.getElementById("retry");
const darkToggle = document.getElementById("darkMode");
const pokemonType = document.getElementById("pokemonType");


//starting the game
async function startPokemon(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        throw new Error(`Could not fetch resource for ${pokemonName}`);
    }

    const data = await response.json();

    //data of the photos
    const pokemonSprite = data.sprites.front_default;
    // console.log(data);
    const pokeSprite = document.getElementById("pokemonSprite");
    //changing the photo into the pokemon sprite
    pokeSprite.src = pokemonSprite;
    pokeSprite.style.display = "block";
    result.innerText = "";
    enteredPokemonName.innerText = "";
}

//function for the next button in which also is responsible for fetching sprites
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

//function for checking if the answer is correct
function submitPokemon() {
    let currentPokemon = pokemon[currentIndex];
    if (enteredPokemonName.value.toLowerCase() === currentPokemon) {
        result.innerText = "You are Correct";
        enteredPokemonName.value = "" ;
        pokemonType.innerText = "";
        fetchNextPokemon();
        // next.style.display = "block";

        // next.removeEventListener("click", fetchNextPokemon); 
        // next.addEventListener("click", fetchNextPokemon);

        //the checking if the question is on the last pokemon on the array
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

darkToggle.addEventListener("click", function darkMode(){
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    darkToggle.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
});

async function hintPokemon(){
    let currentPokemon = pokemon[currentIndex];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
    const data = await response.json();
    const pokemonID = data.id;
    const pokemonDataFromID = await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`)).json();
    console.log(pokemonDataFromID);
    console.log(pokemonDataFromID.flavor_text_entries[0]);

    //Generating the pokdex data from the ID of the pokemon
    let rawText = pokemonDataFromID.flavor_text_entries[0].flavor_text.toString();
    const formattedDexEntries = rawText.replace(/\n|\f/g, ' ');
    pokemonType.innerText = formattedDexEntries;
    
}


// Initial call to start fetching Pokemon
startPokemon(pokemon[currentIndex]);

// di ko pa maayos tong hintPokemon() async na function di ko sya magawa na what if isa lang typing ng pokemon so ayorn ang fucked up







