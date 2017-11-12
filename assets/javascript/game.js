// function printArray(theArray) {
// 	// var newString = "";
	
// 	printArray.join("");
// 	// return newString;`
	
	
// }

// Create array of words 

var myArray = ['Cookies', 'Pizza', 'Tacos', 'Soup', 'Noodles', 'Chocolate', 'cake'];

// Random Choice from the Array  

var Choice = myArray[Math.floor(Math.random()*myArray.length)];
	console.log(Choice);
  	

// Underscore var 

var underscore = [];
	for (var i = 0; i < Choice.length; i++) {
 		underscore.push('_');
 		underscore.join("");
	}



console.log(underscore);
	var el = document.getElementById("guessword");
	var text = document.createTextNode(underscore);
										// printArray
	el.appendChild(text);



// // Get users guess 

document.onkeyup= function(event) {
	var userGuess = event.key; 
		for (var j=0; j<Choice.length; j++){
			 if(Choice[j]===userGuess){
            	Choice[j]=userGuess;
            	console.log("this bull shit worked");
		}

	}

};



// Score board var's 

var rightAnswers = 0; 
var wrongAnswers = [];
var remaining = 15; 


document.onkeyup = function(event) {
	var userGuess = event.key;
	var answerFound = false;

   	for(var j=0; j<Choice.length; j++){

		//If user guess is found in the word fill underscore w letter.  
	    if(Choice[j]===userGuess){
	    	underscore[j]=userGuess;
	    	answerFound = true;
	    }
	}


	if (!answerFound){
 		wrongAnswers.push(userGuess);
    	remaining --;
    }



	if(underscore==Choice)	{
        alert("Congratulations, You Won!");
        wins++;
    }

    if(remaining===0){
    	alert("You lost! You know nothing");
    }

    // Show results to user
    var el = document.getElementById("remaining");

}; 

	
	

