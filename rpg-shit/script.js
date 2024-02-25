let xp = 0;
let health = 100;
let gold = 100;
let currentWeapon = 0;
let fighting;
let monsterHealth1;
let inventory = ["stick"];

const locations = [
    {
        name: "Town Square",
        buttonText: ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunctions: [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\""
    },
    {
        name: "Store",
        buttonText: ["BUY 1 POTION(10 GOLD)", "BUY 1 SWORD(30 GOLD)", "GO TO TOWN SQUARE"],
        buttonFunctions: [buyPotion, buySword, goTown],
        text: "You enter the store"
    },
    {
        name: "Cave",
        buttonText: ["Fight Slime", "Fight Beast", "GO TO TOWN SQUARE"],
        buttonFunctions: [fightSlime, fightBeast, goTown],
        text: "You enter the cave man. You see the monsters"
    },
    {
        name: "Fight",
        buttonText: ["Attack", "Dodge", "Run"],
        buttonFunctions: [attack, dodge, goTown],
        text: "You are figting a monster"
    },
];


const items = [
    {
        itemName: "Potion",
        buttonText: ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunctions: [goStore, goCave, fightDragon],
        text: "You just bought a potion. Your inventory now consists of ",
        price: 10
    },
    {
        itemName: "Iron Sword",
        buttonText: ["Go to store", "Go to cave", "Fight dragon"],
        buttonFunctions: [goStore, goCave, fightDragon],
        text: "You just bought a sword. Your inventory now consists of ",
        price: 30,
    },
];

const weapons = [
    {
        name: "Stick",
        power: 5
    },
    {
        name: "Iron Sword",
        power: 100
    },
    {
        name: "Dagger",
        power: 30
    },
    {
        name: "Claw hammer",
        power: 50
    }
]

const monsters = [
    {
        name: "slime",
        level: 2,
        power: 5
    },
    {
        name: "Fanged Beast",
        level: 8,
        power: 100
    },
    {
        name: "Dragon",
        level: 20,
        power: 30
    }
]


const button1 = document.querySelector("#button1");
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealth = document.querySelector('#monsterHealth');
var action = document.querySelector('#action')


// initializing the buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1];
    button3.innerText = location.buttonText[2];
    button1.onclick = location.buttonFunctions[0];
    button2.onclick = location.buttonFunctions[1];
    button3.onclick = location.buttonFunctions[2];
    text.innerText = location.text;
};

function buying(item){
    button1.innerText = item.buttonText[0];
    button2.innerText = item.buttonText[1];
    button3.innerText = item.buttonText[2];
    button1.onclick = item.buttonFunctions[0];
    button2.onclick = item.buttonFunctions[1];
    button3.onclick = item.buttonFunctions[2];

    var newItem = item.itemName;
    inventory.push(newItem)
    gold -= item.price
    text.innerText = item.text + "" + inventory;
    currentWeapon ++;
    goldText.innerHTML = gold;
    console.log(inventory);
    console.log(gold);
};



function goStore() {
    update(locations[1]);
};

function goTown(){
    update(locations[0]);
};

function goCave() {
    update(locations[2]);
};


function buyPotion() {
    if(gold >= 10){
        buying(items[0])
    } else{
        text.innerText = "You don't have enough gold"
    }
};

function buySword() {
    if(currentWeapon < weapons.length - 1){
        if(gold >= 30){
            buying(items[1])
            let newWeapon = weapons[currentWeapon].name;
        } else{
            text.innerText = "You don't have enough gold"
        }
    } else{
        text.innerHTML = "You have the most powerful weapon"
        button2.innerText = 'Sell weapon for 20 gold'
        button2.onclick = sellWeapon;
    }
};

function sellWeapon(){
    if(inventory.length > 1){
        gold += 20;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = 'You have sold ' + currentWeapon + '.';
        text.innerText += 'Your inveontory now consists of ' + inventory;
    } else {
        text.innerText = 'Dont sell your only weapon man you gonna be ded'
    }
}

function fightSlime(){
    fighting = 0;
    goFight();
};

function fightBeast(){
    fighting = 1;
    goFight();
};

function fightDragon(){
    fighting = 2;
    goFight();
};

function goFight(){
    update(locations[3])
}
function attack(){

}
function dodge(){

}