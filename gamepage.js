// generation of random value

var y = Math.floor(Math.random()*10+1);

playername=localStorage.getItem("playername");
// count of attempts
var guess=1;
// until hit
  
// function for the number sent by the user
function submit()
{
    var x = document.getElementById("guessField").value;
    if (x==y)
    {
       alert("CONGRATULATIONS "+playername+" YOU HAVE GUESSED IT RIGHT IN "+ guess+" GUESSES!");
       guess=1;
    } 
    else if(x>y)
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY!! TRY A LARGER NUMBER");
    }
}
 
 function playAgain()
 {
    var y = Math.floor(Math.random()*10+1);

 }
