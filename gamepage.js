var y = Math.floor(Math.random() * 10 + 1);

var guess = 1;

function submit(){
    var x = document.getElementById("guessField").value;

    if (x == y){
        alert("CONGRATULATIONS!!! " + playername + " YOU GUESSED IT IN " + guess + " GUESS ");
        guess = 1;
    }
    else if(x > y){
        guess++;
        alert("OOPS SORRY!!! " + playername + " TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY!!! " + playername + " TRY A GREATER NUMBER NUMBER");
    }
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}