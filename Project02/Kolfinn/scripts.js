var whosTurn = document.getElementById('turn');
var O = "O, it's your turn!"
var X = "X, it's your turn!"
var lastTurn = 'O';
var win = false;
var draw = false;
var turnCount = 0;

function points()
{
    if(lastTurn !== 'X')
    {
        var xPoints = document.getElementById('xPoints').value|0;
        var result = xPoints + 1;
        document.getElementById('xPoints').value = result;
        document.getElementById('xPoints').innerHTML = result;
        alert("Player 'X' has won the game!");
    }
    else
    {
        var oPoints = document.getElementById('oPoints').value|0;
        var result = oPoints + 1;
        document.getElementById('oPoints').value = result;
        document.getElementById('oPoints').innerHTML = result;
        alert("Player 'O' has won the game!");
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

    resetBoard();
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
                alert("It's a draw!");
                resetBoard();
            }
            else if(win === false)
            {
                turnText();
            }
            else
            {
                points();
                resetBoard();
                win = false;
            }
        }
    }
});
function turnText()
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
    s1 = document.getElementsByTagName('td')[0].textContent;
    s2 = document.getElementsByTagName('td')[1].textContent
    s3 = document.getElementsByTagName('td')[2].textContent
    s4 = document.getElementsByTagName('td')[3].textContent
    s5 = document.getElementsByTagName('td')[4].textContent
    s6 = document.getElementsByTagName('td')[5].textContent
    s7 = document.getElementsByTagName('td')[6].textContent
    s8 = document.getElementsByTagName('td')[7].textContent
    s9 = document.getElementsByTagName('td')[8].textContent
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
}
function checkAll()
{
    checkSqaure();
    var c1, c2, c3;
    var i;
    for(i = 0; i < 7; i = i+3)
    {
        c1 = document.getElementsByTagName('td')[i].textContent;
        c2 = document.getElementsByTagName('td')[i+1].textContent;
        c3 = document.getElementsByTagName('td')[i+2].textContent;
        if((c1 === c2 && c2 === c3) && (c2 === "X" || c2 === 'O'))
        {
            return true;
        }
    }
    for(i = 0; i < 4; i++)
    {
        c1 = document.getElementsByTagName('td')[i].textContent;
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
    console.log(lastTurn);
    var square;
    for(i = 0; i < 9; i++)
    {
        document.getElementsByTagName('td')[i].textContent = "";
    }
    if(lastTurn !== 'O' && turnCount > 0){
        whosTurn.classList.toggle('o');
        document.getElementById('turn').textContent = X;
        lastTurn = 'O';
    }
    turnCount = 0;
    draw = false;
    win = false;
}