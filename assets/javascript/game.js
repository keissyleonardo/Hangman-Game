// function printArray(theArray) {
// 	// var newString = "";
	
// 	printArray.join("");
// 	// return newString;`
	
	
// }

// Create array of words 

var myArray = ['cookies', 'pizza', 'tacos', 'soup', 'noodles', 'chocolate', 'cake'];

// Random choice from the Array  

var choice = myArray[Math.floor(Math.random()*myArray.length)];
	console.log(choice);
  	

// Underscore var 

var underscore = [];
	for (var i = 0; i < choice.length; i++) {
 		underscore.push('_');
 		underscore.join("");
	}



console.log(underscore);
	var el = document.getElementById("guessword");
	var text = document.createTextNode(underscore);
										// printArray
	el.appendChild(text);



// // Get users guess 

// document.onkeyup= function(event) {
// 	var userGuess = event.key; 
// 		for (var j=0; j<choice.length; j++){
// 			 if(choice[j]===userGuess){
//             	choice[j]=userGuess;
//         console.log("this bull shit worked");
// 		}

// 	}

// };



// Score board var's 

var rightAnswers = 0; 
var wrongAnswers = [];
var remaining = 15; 


document.onkeyup = function(event) {
	var userGuess = event.key;
	var answerFound = false;
	console.log(userGuess);

   	for(var j=0; j<choice.length; j++){

		//If user guess is found in the word fill underscore w letter.  
	    if(choice[j] === userGuess){
	    	underscore[j]=userGuess;
	    	answerFound = true;
	    }
	}


	if (answerFound){
		el.innerHTML = underscore;
		console.log(`this is the underscore array now: ${underscore}`);

	} else if (!answerFound){
 		wrongAnswers.push(userGuess);
 		console.log(`All the wrong choices ${wrongAnswers}`);
    	remaining --;
    }



	if(underscore==choice)	{
        alert("Congratulations, You Won!");
        wins++;
    }

    else if(remaining===0){
    	alert("You lost! You know nothing");
    }

    // Show results to user
    var elRemain = document.getElementById("remaining");

										// printArray
	elRemain.innerHTML = remaining;



}; 

	
	

