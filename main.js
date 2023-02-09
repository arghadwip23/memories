




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

btnb.addEventListener("click",()=>{
   if (document.getElementById("name").value && document.querySelector('input[name="radioNoLabel"]:checked')) {
        pageb.style.display='none';
        pagec.style.display='flex';


   }
   else{
       Swal.fire(
           "",
           "please enter your name select your gender",
           "error"
           )
   }
})
btnc.addEventListener("click",()=>{
   if (document.getElementById("comment").value) {
    pagec.style.display="none";
    paged.style.display="flex";

   }else {
       Swal.fire(
           "",
           "please share your word",
           "error"
       )
   }
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


