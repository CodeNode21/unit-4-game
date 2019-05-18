$(document).ready(function(){
// defining global variables below
crystals = [
	"crystal-1",
	"crystal-2",
	"crystal-3",
	"crystal-4",
]
//Tried approaching this hw with the array above but having trouble

var score = 0;
var wins = 0;
var losses = 0;
 
    $("#crystal-1").html(cNumGenerator());
    $("#crystal-2").html(cNumGenerator());
    $("#crystal-3").html(cNumGenerator());
    $("#crystal-4").html(cNumGenerator());

    
// function to generate random number. The random number shown at the start should be between 19-120.
// each crystal should have a random hidden value between 1-12.
	function randomNum() {
		var randNum = Math.floor(Math.random() * 120) +1;	
		return randNum;
	}
	//??? I don't know why randNum is not being defined in the above???
	
	// following assigns random value to html
		$(".random-number").val(randNum);
		$(".random-number").html(randNum);
		
// function to generate random numbers and assign to crystals
	function cNumGenerator() {
		var crystVal = Math.floor(Math.random() * 12) + 1;
		for (var i=0; i < crystals.length; i++); {
				$(crystals[i]).val(crystVal);
		}
	}
		console.log.val.crystals[0];
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
		$(".crystals").on("click",function(){
			if(this.id === crystal-1){
				score += crystal-1;
			}
			else if(this.id ==="crystal-2"){
				score += crystal-2;
			}
			else(this.id ==="crystal-3"){
				score += crystal-3;
			}
			else(this.id ==="crystal-3"){
				score += crystal-3;
			}
		})
		return score;
		
	}
	$("#score-counter").html(score);	
	
	
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

// function sets rules of the game
function didUserWin(randNum, score) {
	if (score === randNum) {
		return true;
	}
	else if (score > randNum) {
		return false;
	}
	else {
		return false;
	}
}

// function to set up new game
	function restartGame() {
		score = 0;
		randomNum();
		cNumGenerator();
		$("#random-number").html(randNum);
		$("#score-counter").html(score);
	}

		
		
	
	});