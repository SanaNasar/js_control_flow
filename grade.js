  // The Grade Assigner

 var userInput = prompt("What's your score?");
 var assignGrade = function(userInput)
	{
		if (numscore <= 5) {
		console.log ("Hooray! You have got an A grade!");
		}
	else {
		console.log ("You're grade is B. Better luck next time!");
	}
  };
   assignGrade(userInput);