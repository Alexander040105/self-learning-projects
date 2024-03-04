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


const pokemon = ["charizard","pikachu","mewtwo", "zekrom", "reshiram"]
let currentIndex = 0;
const result = document.getElementById("result");
const next = document.getElementById("next");
const start = document.getElementById("start");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const pokemonType = document.getElementById("pokemonType");

async function startPokemon(pokemons){
    let currentPokemon = pokemon[currentIndex];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);

    if (!response.ok) {
        throw new Error(`Could not fetch resource for ${currentPokemon}`);
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

function submitPokemon(){
    let currentPokemon = pokemon[currentIndex];
        if (pokemonName.value.toLowerCase() === currentPokemon) {
            result.innerText = "You are Correct";
            next.style.display = "flex";

            next.addEventListener("click", function(){
                currentIndex++;
                result.innerText = "";
                pokemonName.value = "" ;
                pokemonType.innerText = "";
                startPokemon(pokemon);
            });
        } else if (pokemon.value !== currentPokemon){
            result.innerText = "You are incorrect bro";
            pokemonName.value = "";
        }
}

function fetchNextPokemon() {
    currentIndex++;
    if (currentIndex < pokemon.length) {
        startPokemon(pokemon);
    }
}

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


    // const pokemonData = data.types[0].type.name;

    // for(let i = 0; i<data.types.length;i++){
    //     const pokemonData = data.types[i].type.name;
    //     pokemonType.innerText = "The type of this pokemon is " + pokemonData
    // }
    // pokemonName.addEventListener("click", function(){
    //     start.innerText = "Submit"
    // });



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



