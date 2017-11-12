function printArray(theArray, delimiter) {
	return theArray.join(delimiter);
}

// Create array of words 

var myArray = ['cookies', 'pizza', 'tacos', 'soup', 'noodles', 'chocolate', 'cake'];

// Random Choice from the Array  

var Choice = myArray[Math.floor(Math.random()*myArray.length)];
	console.log(Choice);
  	

// Underscore var 

var underscore = [];
	for (var i = 0; i < Choice.length; i++) {
 		underscore.push('_');
	}
 

console.log(underscore); 
	var el = document.getElementById("guessword");
	var text = document.createTextNode(printArray(underscore, " "));
	el.appendChild(text);





// Score board var's 

var rightAnswers = 0; 
var wrongAnswers = [];
var prevAnswers = [];
var remaining = 15; 


var el = document.getElementById("remaining");
	var text = document.createTextNode(remaining + " guesses left");
	el.appendChild(text);


document.onkeyup = function(event) {
	if (event.keyCode <= 64 || event.keyCode >= 91)
		return; 
	    
	    // alert("input was a-z");
		
	var userGuess = event.key;
	var answerFound = false;


	if (prevAnswers.includes(userGuess)){
		alert("You used that letter already!");
		return; 
	}

   	for(var j=0; j<Choice.length; j++){

		//If user guess is found in the word fill underscore w letter.  
	    if(Choice[j]===userGuess){
	    	underscore[j]=userGuess;	    
	    	answerFound = true;
	    	rightAnswers++;
	    }
	}


	if (!answerFound){
 		wrongAnswers.push(userGuess);
    	remaining --;
    }

	prevAnswers.push(userGuess);



    // Show results to user
    var guessEl = document.getElementById("guessword");
    guessEl.innerHTML = "";
	var text = document.createTextNode(printArray(underscore, " "));
	guessEl.appendChild(text);



	var remainingEl = document.getElementById("remaining");
    remainingEl.innerHTML = "";
	var text = document.createTextNode(remaining + " guesses left");
	remainingEl.appendChild(text);

	var rightEL = document.getElementById("numwins"); 
	rightEL.innerHTML = "";
	var text = document.createTextNode(rightAnswers); 
	rightEL.appendChild(text);


	var wrongEl = document.getElementById("wrong");
    wrongEl.innerHTML = "";
	var text = document.createTextNode(printArray(wrongAnswers, " "));
	wrongEl.appendChild(text);



	if(printArray(underscore, "")==Choice)	{
        alert("Congratulations, You Won!");
        location.reload();
    }



    if(remaining===0){
    	alert("You lost! You know nothing");
    	location.reload();
    }
}; 

	
	

