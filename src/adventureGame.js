/*
Adventure Game
This game will be a text-based adventure game where the player wll be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Include readline for player input
const readline = require('readline-sync');

// Display the game title
console.log("\nWelcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20; // Starting gold for the player
let currentLocation = "village"; // Starting location
let gameRunning = true;
let playerInventory = [];

console.log(`
=================================================
             The Dragon's Quest
=================================================
            
Your quest: Defeat the dragon in the mountains!\n 
`);

// Get player name using readline-sync
while (playerName.trim() === "") {
    playerName = readline.question("What is your name, adventurer? ");
    if (playerName.trim() === "") {
        console.log("Please enter a valid name.");
    }
}

// Display a personalized welcome message
console.log(`\nWelcome, ${playerName}! Your adventure begins now.`);
console.log(`You start with ${playerGold} gold.`);


