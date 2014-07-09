var pluralize = function(noun,number)
{
	if (number === 1) {
			console.log (number + " " + noun);
	}
	else {
		console.log (number + " " + noun +"s");
	}
};

pluralize("Dog",1);
pluralize("Cat",4);
pluralize("Fish",1);
pluralize("Monkey",100);