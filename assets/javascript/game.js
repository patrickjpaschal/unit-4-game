var resetButton = document.querySelector("#reset");
var numberBox = document.getElementById("number-box");
var goalNum = Math.floor(Math.random() * 51 + 50);
var runningNum = 0;
var gems = document.getElementsByClassName("gem");
var running
var data = document.getElementById("game data");
var wins = document.getElementById("wins");
var reset = document.getElementById("reset");
var loses= document.getElementById("loses");
var color= document.getElementsByClassName("gems");
for (var i = 0; i < gems.length; i++) {
    var gemElement = gems[i];
    gemElement.value =  Math.floor(Math.random() * 11);
}

 
$("#number-box").css("font-size", "18px");
$("#number-box").css("color", "darkblue");
$("#number-box").css("font-weight", "550");
 function load(){
   document.getElementById("number-box").innerHTML= "Try to get " + goalNum; 
}

// console.log("gemOne", "gemTwo", "gemThree", "gemFour");
$( gems ).on("click",function() {
    var gemValue = this.value;  
    runningNum = runningNum + parseInt(gemValue);
    console.log(runningNum,goalNum);
    document.getElementById("running").innerHTML= "You're currently at " + runningNum;
    document.getElementById("number-box").innerHTML= "Try to get " + goalNum;
    // if(runningnNum= )co
    if(runningNum === goalNum) {
        console.log("you Win!");
        document.getElementById("game data").innerHTML= 'You Win!!  Click the "NEW GEMS" button to play again... Or feel free to continue click the gems and practice for the next game!';
        wins = 0;
        wins++;
        document.getElementById("wins").innerHTML= "Wins:"+ wins; 
        // $(gems).off("click");
        
        }
    if(runningNum < goalNum) {
        document.getElementById("game data").innerHTML= "Keep going";
        console.log("Keep going")
    }
    if(runningNum > goalNum) {
        console.log("You lost");
        document.getElementById("game data").innerHTML= 'You Lose!!             Click the "NEW GEMS" button to try again... Or feel free to continue clicking the gems and practice for the next game!' ;
        loses = 0;
        loses++;
        document.getElementById("loses").innerHTML=  "Loses:" + loses;
        // $(gems).off("click");
//         var myClasses = document.querySelectorAll('.gems'),
//     i = 0,
//     l = myClasses.length;

// for (i; i < l; i++) {
//     myClasses[i].style.display = 'none';
// }


    }
    
    $(reset).click(function(){
        gemValue =  Math.floor(Math.random() * 11);
        runningNum = +0;
        document.getElementById("game data").innerHTML= "";
        document.getElementById("running").innerHTML= "";
        document.getElementById("number-box").innerHTML = "";
        $(gems).on("click");
       
    })
   

});







// let.gemOne = Math.floor(Math.random() * 11);

// for(var i = 0; i < gems.length; i++);



//    function randomValue() {
// 	//pick a value from 0 - 10
	// var gemOneValue = Math.floor(Math.random() * 11);
	
// 	var gemTwoValue = Math.floor(Math.random() * 11);
	
// 	var gemThreeValue = Math.floor(Math.random() * 11);
    
//     var gemFourValue = Math.floor(Math.random() * 11);
//     return;}""