
var wins = 0;
var losses = 0;
var score = 0;






//seting randomNumber
randomResult = Math.floor(Math.random() * 90) + 30;
$("#random-number").html("Match this number: " + randomResult);
console.log(randomResult);

//setting values to crystals
    var randNum1 = Math.floor(Math.random() * 11) + 1;
    $("#data").html(randNum1);
    var randNum2 = Math.floor(Math.random() * 11) + 1;
    $("#crystal-2").html(randNum2);
    var randNum3 = Math.floor(Math.random() * 11) + 1;
    $("#crystal-3").html(randNum3);
    var randNum4 = Math.floor(Math.random() * 11) + 1;
    $("#crystal-4").html(randNum4);

    console.log(score);
    $("#score-counter").html(score);

$("#crystal-1").on("click", function () {
    score = score + randNum1;
    console.log(score, randNum1);
    $("#score-counter").html(score);
});
$("#crystal-2").on("click", function () {
    score = score + randNum2;
    console.log(score, randNum2);
    $("#score-counter").html(score);
});
$("#crystal-3").on("click", function () {
    score = score + randNum3;
    console.log(score, randNum3);
    $("#score-counter").html(score);
});
$("#crystal-4").on("click", function () {
    score = score + randNum4;
    console.log(score, randNum4);
    $("#score-counter").html(score);
});


if(score > randomResult){
    losses++;
    console.log("You loose");
}
else if(score === randomResult){
    wins++;
    console.log("Winner winner");
}



//game with 4 crystals and random score between 50-120
//every crystal has random number between 1-12
//number should be generated every new round
//clicking crystal adds to the score until it matches or goes over the score
// if the sum of crystal clicks matches the random score; player wins
//if the sum of crystals goes over the random score; player looses
