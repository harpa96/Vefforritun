var whosTurn = document.getElementById('turn');
var O = "O, it's your turn!"
var X = "X, it's your turn!"

whosTurn.addEventListener('click', function(){
    whosTurn.classList.toggle('o');
    if(document.getElementById('turn').textContent !== O){
        document.getElementById('turn').textContent = O;
        document.getElementById('turn').value = 1;
    }
    else{
        document.getElementById('turn').textContent = X;
        document.getElementById('turn').value = 0;
    }
});

function won(xWon, draw)
{
    if(xWon === true)
    {
        var xPoints = document.getElementById('xPoints').value|0;
        var result = xPoints + 1;
        document.getElementById('xPoints').value = result;
        document.getElementById('xPoints').innerHTML = result;
    }
    else if(draw === true)
    {
        //nothing happens
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

button.addEventListener('click', reset);

function reset()
{
    document.getElementById('xPoints').value = 0;
    document.getElementById('xPoints').innerHTML = 0;
    document.getElementById('oPoints').value = 0;
    document.getElementById('oPoints').innerHTML = 0;

    //insert reset board instructions
}
$("#table tr td").click(function() {
    if ($(this).text()=="") {
      if (document.getElementById('turn').textContent === X) {
        $(this).append("x");
      }
      else {
        $(this).append("O");
      }
    }
  });

var s1 = document.getElementById('1').innerText;
var s2 = document.getElementById('2').innerText;
var s3 = document.getElementById('3').innerText;
var s4 = document.getElementById('4').innerText;
var s5 = document.getElementById('5').innerText;
var s6 = document.getElementById('6').innerText;
var s7 = document.getElementById('7').innerText;
var s8 = document.getElementById('8').innerText;
var s9 = document.getElementById('9').innerText;
var xWon = false;
var oWon = false;
var lastTurn = document.getElementById('turn').value;
var won = false;
var turnCount = 0;

function won()
{
    if(checkRows == true || checkColumns == true || checkDiagonal == true)
    {
        return lastTurn;
    }
    else if(turnCount === 9)
    {
        draw = true;
        return draw;
    }
    else
    {
        return false;
    }
}
function checkRows()
{
    if((s1 === s2 && s2 === s3) || (s4 === s5 && s5 === s6) || (s7 === s8 && s8 === s9))
    {
        if(lastTurn === 1)
        {
            xWon = true;
            return xWon
        }
        else{
            oWon = true;
            return oWon
        }
    }
    else
    {
        return false;
    }
}
function checkColumns()
{
    if((s1 === s4 && s4 === s7) || (s2 === s5 && s5 === s8) || (s3 === s6 && s6 === s9))
    {
        if(lastTurn === 1)
        {
            xWon = true;
            return xWon
        }
        else{
            oWon = true;
            return oWon
        }
    }
    else
    {
        return false;
    }
}
function checkDiagonal()
{
    if((s1 === s5 && s5 === s9) || (s3 === s5 && s5 === s7)))
    {
        if(lastTurn === 1)
        {
            xWon = true;
            return xWon
        }
        else{
            oWon = true;
            return oWon
        }
    }
    else
    {
        return false;
    }
}