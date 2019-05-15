$(document).ready(){
// defining global variables below
crystals = [
"crystal-1",
"crystal-2",
"crystal-3",
"crystal-4",
"crystal-5",
]
var score = 0;
var wins = 0;
var losses = 0;

// function to generate random number. The random number shown at the start should be between 19-120.
// each crystal should have a random hidden value between 1-12.
	function randomNum() {
		var randNum = Math.floor(Math.random() * 120) +1;
		return randNum;
	}
		console.log(randNum);
		// following assigns random value to field
		$("#random-number").val(randNum());
		
// function to generate random numbers and assign to crystals
	function cNumGenerator() {
		var crystVal = Math.floor(Math.random() * 12) + 1;
		for (var i=0; i < crystals.length; i++); {
				$(crystals[i]).val(crystVal)
		}
	}
		console.log.val.crystals[0]);
		console.log(crystal-2);
		console.log(crystal-3);
		console.log(crystal-4);
		
		//following should assign values to crystals
	//	$("#crystal-1").val(cNumGenerator());
	//	$("#crystal-2").val(cNumGenerator());
	//	$("#crystal-3").val(cNumGenerator());
	//	$("#crystal-4").val(cNumGenerator());
	//	$("#crystal-5").val(cNumGenerator());
		
// function to track score on score counter
	function scoreBoard(){
		
	
	
// function to determine if result matches score counter and note if won or lost

	if (didUserWin(randNum === score)) {
		wins+=1;
		$("#wins").html(wins);
		alert("You've won!")
		restartGame();
	}
	else if (score > randNum) {
		losses+=1
		$("#losses").html(losses);
		alert("You've lost")
		restartGame();
	}


// function to set up new game
	function restartGame() {
		score = 0;
		randomNum();
		cNumGenerator();
		$("#random-number").html(randNum);
		$("#score-counter").html(______);
	}
// function sets rules of the game
	function didUserWin(randNum, _______ ) {
		if (______ === randNum) {
			return true;
		}
		else if (_____ > randNum) {
			return false;
		}
		else {
			return false;
		}
	}
		
		
	
}};