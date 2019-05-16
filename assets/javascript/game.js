$(document).ready(function(){
// defining global variables below

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crystal5 = 0;

var score = 0;
var wins = 0;
var losses = 0;

    $("#crystal-1").html(cNumGenerator());
    $("#crystal-2").html(cNumGenerator());
    $("#crystal-3").html(cNumGenerator());
    $("#crystal-4").html(cNumGenerator());
    $(".random-number").html(randNum);
    $("#crystal-1").click(cNumGenerator());
// function to generate random number. The random number shown at the start should be between 19-120.
// each crystal should have a random hidden value between 1-12.
	function randomNum() {
		var randNum = Math.floor(Math.random() * 120) +1;
		return randNum;
	}
		console.log(randNum);
		// following assigns random value to html
		$(".random-number").val(randNum());
		
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

	}
		
	
	
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
		
		
	
	});