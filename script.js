(function () {

//draw canvas
document.getElementById("canvas-tl").onclick = function() {draw(this.id)};
document.getElementById("canvas-tm").onclick = function() {draw(this.id)};
document.getElementById("canvas-tr").onclick = function() {draw(this.id)};
document.getElementById("canvas-ml").onclick = function() {draw(this.id)};
document.getElementById("canvas-mm").onclick = function() {draw(this.id)};
document.getElementById("canvas-mr").onclick = function() {draw(this.id)};
document.getElementById("canvas-bl").onclick = function() {draw(this.id)};
document.getElementById("canvas-bm").onclick = function() {draw(this.id)};
document.getElementById("canvas-br").onclick = function() {draw(this.id)};

var size_click = 0;

function draw(clicked_id){
  var can = document.getElementById(clicked_id);
  var canc = can.getContext("2d");

  if(size_click%2 == 0){
    canc.beginPath();
    canc.arc(100,100,70,0,2*Math.PI);
    canc.lineWidth=3;
    canc.stroke();
    size_click++;
  }
  else {
    canc.beginPath();
    canc.moveTo(25,25);
    canc.lineTo(175,175);
    canc.lineWidth=3;
    canc.stroke();
    canc.moveTo(25,175);
    canc.lineTo(175,25);
    canc.lineWidth=3;
    canc.stroke();
    size_click++;
  }

  showTurn();
}

//show turn
var turn = document.getElementById("js-turn");
function showTurn(){
  if(size_click%2 == 0){
    turn.innerHTML = "&#x25EF;";
  }else{
    turn.innerHTML = "&#x2715;";
  }
}

// erase all canvases
document.getElementById("restart").onclick = function() { erase()};

function erase ()
{
  var allCan = document.getElementsByTagName("canvas");
  // console.log(allCan);
  for(var i = 0; i < 9; i++) {
    // console.log(allCan[i]);
    var allCanCon = allCan[i].getContext("2d");
    // allCanCon.clearRect(0, 0, allCanCon.context.width, allCanCon.context.height);
    allCanCon.clearRect(0,0,200,200);
  }
}

}());
