window.addEventListener("load",bindEvents);
var buttonArray;
function bindEvents(){
    buttonArray = document.getElementsByTagName("button");
    for(let  i =0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",printXorZero);
    }
}
const isNotBlank = (button)=>button.innerHTML?true:false;

const isSameValue=(one,two,three)=>(one.innerHTML == two.innerHTML && one.innerHTML == three.innerHTML);

var isGameDone = false;

function isSameRow(one , two ,three){
if(isNotBlank(one) && isNotBlank(two) && isNotBlank(three)){
if(isSameValue(one,two,three)){
    return true;
}
return false;
}
}


function gameOver(){
    if(isSameRow(buttonArray[0],buttonArray[1],buttonArray[2])){
        isGameDone= true;
        alert("Game Over");
    }
    if(isSameRow(buttonArray[0],buttonArray[3],buttonArray[6])){
        isGameDone= true;
        alert("Game Over");
    }
  if(isSameRow(buttonArray[0],buttonArray[4],buttonArray[8])){
        isGameDone= true;
        alert("Game Over");
    }
  if(isSameRow(buttonArray[1],buttonArray[4],buttonArray[7])){
        isGameDone= true;
        alert("Game Over");
    }
  if(isSameRow(buttonArray[2],buttonArray[4],buttonArray[6])){
        isGameDone= true;
        alert("Game Over");
    }
  if(isSameRow(buttonArray[2],buttonArray[5],buttonArray[8])){
        isGameDone= true;
        alert("Game Over");
    }
  if(isSameRow(buttonArray[6],buttonArray[7],buttonArray[8])){
        isGameDone= true;
        alert("Game Over");
    }
 
}

var isXorZero = false;
Var playerName=you;
function printXorZero(){
    //console.log("Testing...",this);
    var buttonValue = this.innerHTML;
    if(!buttonValue && !isGameDone){
            this.innerHTML = isXorZero?"X":"0";
            isXorZero = !isXorZero;
            document.write(playerName);
           console.log(playerName);
            gameOver();
    }
}
