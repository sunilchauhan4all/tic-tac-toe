window.addEventListner("load",bindEvents);
var buttonArray;
function bindEvents(){
  buttonArray= document.getElementByTagName("button");
  for(let i=0; i<buttonArray.length;i++){
    buttonArray[i].addEventListener("click",printXorZero);
  }
}

const isNotBlank=(button)=>button.innerHTML?true:false;

const isSameValue=(one,two,three)=>(one.innerHtml==two.innerHtml && one.innerHtml==three.innerHtml);

var isGameDone=false;

function isSameRow(one,two,three){
  if(isNotBlank(one)&& isNotBlank(two) && isNotBlank(three)){
    if (isSameValue(one,two,three)){
      
       return true;
    }
    return false;
  }
}

function gameOver(){
  if(isSameRow(buttonArray[0],buttonArray[1],buttonArray[2])){
       isGameDone=true;
       alert("game over");
     }
}


var isXorZero=false;
function printXorZero(){
  var buttonValue=this.innerHtml;
  if(!buttonValue && !isGameDone){
       this.innerHtml=isXorZero?"X":"0";
       isXorZero= !isXorZero;
       gameOver();
  }
}
