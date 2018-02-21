var whosTurn = document.getElementById('turn');
var O = "O, it's your turn!"
var X = "X, it's your turn!"
var lastTurn = 'O';
var win = false;
var draw = false;
var turnCount = 0;

function points()
{
    if(win === true)
    {
        if(lastTurn === 'X')
        {
            var xPoints = document.getElementById('xPoints').value|0;
            var result = xPoints + 1;
            document.getElementById('xPoints').value = result;
            document.getElementById('xPoints').innerHTML = result;
            alert("Player 'X' has won the game!");
        }
        else
        {
            var oPoints = document.getElementById('oPoints').value|1;
            var result = oPoints + 1;
            document.getElementById('oPoints').value = result;
            document.getElementById('oPoints').innerHTML = result;
            alert("Player 'O' has won the game!");
        }
    }
    else
    {
        alert("It's a draw!");
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

    resetBoard;
}

var table = document.getElementById("ttt");

table.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "TD") {
        if(e.target.textContent === "") {
            if (lastTurn === 'X') {
                e.target.textContent = 'O';
            }
            else {
                e.target.textContent = 'X';
            }
        
            won;

            turnCount++;

            if(turnCount === 9 && win === false)
            {
                resetBoard;
            }
            else if(win === false)
            {
                if(lastTurn === 'X'){
                    whosTurn.classList.toggle('o');
                    document.getElementById('turn').textContent = X;
                    lastTurn = 'O';
                }
                else{
                    whosTurn.classList.toggle('o');
                    document.getElementById('turn').textContent = O;
                    lastTurn = 'X';
                }
            }
            else
            {
                points;
                resetBoard;
                win = false;
            }
            console.log(turnCount);
            console.log(lastTurn);
            console.log(win);
        }
    }
});

var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var s7;
var s8;
var s9;

function checkSqaure()
{
    s1 = document.getElementById('1').nodeValue;
    s2 = document.getElementById('2').nodeValue;
    s3 = document.getElementById('3').nodeValue;
    s4 = document.getElementById('4').nodeValue;
    s5 = document.getElementById('5').nodeValue;
    s6 = document.getElementById('6').nodeValue;
    s7 = document.getElementById('7').nodeValue;
    s8 = document.getElementById('8').nodeValue;
    s9 = document.getElementById('9').nodeValue;
}


function won()
{
    var check = checkAll;
    if(check === true)
    {
        win = true;
    }
    else if(turnCount === 9)
    {
        draw = true;
    }
    else
    {
        //nothing
    }
}
function checkAll()
{
    checkSqaure;
    if(((s1 === s2 && s2 === s3) && s1 !== "") || ((s4 === s5 && s5 === s6) && s4 !== "") || ((s7 === s8 && s8 === s9) && s7 !== ""))
    {
        return true;
    }
    else if(((s1 === s4 && s4 === s7) && s1 !== "") || ((s2 === s5 && s5 === s8) && s2 !== "") || ((s3 === s6 && s6 === s9) && s3 !== ""))
    {
        return true;
    }
    else if(((s1 === s5 && s5 === s9) || (s3 === s5 && s5 === s7)) && s5 !== "")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function resetBoard()
{
    var square;
    for(i = 1; i <= 9; i++)
    {
        square = document.getElementsByTagName('table');
        square.getElementsByTagName('td')[i].innerText = "";
    }
    lastTurn = 'O';
    whosTurn;
    turnCount = 0;
}