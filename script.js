var timer = 10;
var score=0;

function make_bubble() {
    var clutter = "";
    for (var i = 1; i <=198; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#p_bottom").innerHTML = clutter;
}
make_bubble();
//till this part it is making the bubble

function runtimer() {
   var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#p_bottom").innerHTML=`<h1>Game Over</h1>`;
        }
    }, 1000);
}
runtimer();
//till this part bubble and timer has been created

var hitrn=0;
function getnewhit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
    //runtimer();
}
getnewhit();
//this function changes the value of each hit


function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
//increasescore();
//this function increases the value of score


document.querySelector("#p_bottom").
addEventListener("click", function(dets){
 var clickednum=(Number(dets.target.textContent));//Number() function is changing string to number
 if(clickednum == hitrn){
    increasescore();
    make_bubble();
    getnewhit();
 }
})
