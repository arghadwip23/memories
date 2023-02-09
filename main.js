




console.log('Hello World!');

let x = [];
let y = [];

var loader= document.getElementById("loader");
var btna = document.getElementById("bta");
var btnb = document.getElementById("btb");
var btnc = document.getElementById("btc");
var pagea = document.getElementById("intro");
var pageb = document.getElementById("a");
var pagec = document.getElementById("b");
var paged = document.getElementById("c");
var clr = document.getElementById("clr");
var sv = document.getElementById("savey");
let mycanvas='';
function setup() {
    myCanvas = createCanvas(displayWidth-20, 250);
    //mycanvas.id("canva");
    myCanvas.parent('can');
    //mycanvas.id('canva');
      background(255);

}

function draw() {
  stroke(000);
  if(mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}
 
 
setTimeout(()=>{
    loader.style.display="none";
    pagea.style.display="flex";
},5000+100*Math.random());
//var typed = new Typed('.element', options);

btna.addEventListener("click",()=>{
    pagea.style.display="none";
    pageb.style.display="flex";
})


sv.addEventListener("click",()=>{
    saveCanvas(mycanvas, 'jpg', 'jpg');
})


btnb.addEventListener("click",()=>{
    pageb.style.display='none';
    pagec.style.display='flex';
})
btnc.addEventListener("click",()=>{
    pagec.style.display="none";
    paged.style.display="flex";
clr.addEventListener("click",()=>{
    clear();
    function draw() {
        stroke(000);
        if (mouseIsPressed == true) {
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    
    }
    
    });



})




