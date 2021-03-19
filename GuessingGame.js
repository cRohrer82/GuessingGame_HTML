// Christopher Rohrer

var goalNum =-1;

function randNum() {
	goalNum =Math.random();
	goalNum *=100;
	goalNum +=1;
	goalNum =parseInt(goalNum);
}

function playerGuess() {
	guessNum =userGuess.value;
	tryHist.value =guessNum);
}

function guessClick() {
	document.write("test");
	var userGuess= document.getElementById("userGuess");
	alert(userGuess.value);
	/*switch (userGuess) {
		case <goalNum:
			alert("It's greater than that... try again");
			break;
		case >goalNum:
			alert("It's less than that... try again");
			break;
		case =goalNum:
			alert("That's it!!");
	}*/
}
