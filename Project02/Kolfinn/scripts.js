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
        
            turnCount++;
            won();

            if(draw === true)
            {
                resetBoard();
            }
            else if(win === false)
            {
                whosTurn();
            }
            else
            {
                points();
                resetBoard();
                win = false;
            }
            console.log(turnCount);
            console.log(lastTurn);
            console.log(win);
            console.log(draw);
        }
    }
});
function whosTurn()
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
    var check = checkAll();
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
    checkSqaure();
    for(var i = 1; i <= 9; i+3)
    {
        var c1 = document.getElementsByTagName('td')[i].textContent;
        var c2 = document.getElementsByTagName('td')[i+1].textContent;
        var c3 = document.getElementsByTagName('td')[i+2].textContent;
        if((c1 === c2 && c2 === c3) && (c2 === "X" || c2 === 'O'))
        {
            return true;
        }
        c2 = document.getElementsByTagName('td')[i+3].textContent;
        c3 = document.getElementsByTagName('td')[i+6].textContent;
        if((c1 === c2 && c2 === c3) && (c2 === "X" || c2 === 'O'))
        {
            return true;
        }
    }
    if((s1 === s5 && s5 === s9) && (s5 === "X" || s5 === 'O') || (s3 === s5 && s5 === s7) && (s5 === 'X' || s5 === 'O'))
    {
        return true;
    }
    else{
        return false;
    }
}

function resetBoard()
{
    console.log("resetBoard");
    var square;
    for(var i = 1; i <= 9; i++)
    {
        document.getElementsByTagName('td')[i].textContent = "";
    }
    lastTurn = 'O';
    whosTurn();
    turnCount = 0;
    draw = false;
    win = false;
}