  // The Grade Assigner

var userInput = prompt("What's your score?"); 
var assignGrade = function(userInput)
{
	if ( userInput >= 90 ) {
	 return A;
 	}
 	if (userInput < 80)
 		{
 			return B;
 		}
 			else {
 			return C;
 			}
 }
 };

assignGrade(userInput);
 