"use strict";

const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");

const welcomeForm = document.getElementById("welcomeForm");
const gameForm = document.getElementById("gameForm");

const playButton = document.getElementById("playButton");
const userName = document.getElementById("userName");
const startButton = document.getElementById("startButton");
const userChoice = document.getElementById("choice");

const newParagraph = document.createElement("p")

let game;

class RockPaperScissorsGame {
	constructor() {
		this.computerChoice = Math.random();
		
		if (this.computerChoice <= .3) {
			this.computerChoice = "rock";
		} else if (this.computerChoice <= .6 {
			this.computerChoice = "paper";
		} else {
			this.computerChoice = "scissors";
		}
	}
	
	computerChoice() {
		return this.computerChoice;
	}
	
	guess(choice) {
		return this.computerChoice === choice;
	}
}


welcomeForm.addEventListener("submit", function (welcomeFormSubmitEvent) {
	
	welcomeFormSubmitEvent.preventDefault();
	
	welcomeScreen.classList.add("hidden");
	gameScreen.classList.remove("hidden");
});

gameForm.addEventListener("submit", function (gameFormSubmitEvent) {
	gameFormSubmitEvent.preventDefault();
	
	const computerGuess = game.computerChoice();
	const didWin = game.guess(userChoice.value);
	
	if (!didWin) {
		newParagraph.innerText = 'You Lost, you selected ${ userChoice.value } and the computer selected ${ this.computerGuess }.';
	}
	
	newParagraph.innerText = 'You Lost, you selected ${ userChoice.value } and the computer selected ${ this.computerGuess }.';
});















