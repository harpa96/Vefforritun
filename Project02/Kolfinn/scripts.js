var whosTurn = document.getElementById('turn');
var O = "O, it's your turn!"
var X = "X, it's your turn!"

whosTurn.addEventListener('click', function(){
    whosTurn.classList.toggle('o');
    if(document.getElementById('turn').textContent !== O){
        document.getElementById('turn').textContent = O;
    }
    else{
        document.getElementById('turn').textContent = X;
    }
});

function won(xWon)
{
    if(xWon === true)
    {
        var xPoints = document.getElementById('xPoints').value|0;
        var result = xPoints + 1;
        document.getElementById('xPoints').value = result;
        document.getElementById('xPoints').innerHTML = result;
    }
    else
    {
        var oPoints = document.getElementById('oPoints').value|1;
        var result = oPoints + 1;
        document.getElementById('oPoints').value = result;
        document.getElementById('oPoints').innerHTML = result;
    }
}
var button = document.getElementById("reset");

button.addEventListener('click', resetScore);

function resetScore()
{
    document.getElementById('xPoints').value = 0;
    document.getElementById('xPoints').innerHTML = 0;
    document.getElementById('oPoints').value = 0;
    document.getElementById('oPoints').innerHTML = 0;
}
function resetBoard()
{
    
}