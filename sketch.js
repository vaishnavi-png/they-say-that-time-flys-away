function setup() {
  createCanvas(1000,500);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(133,245,343);
  textSize(24);
  textStyle("bold");
  text(" WHY YOU SHOULD NEVER TRUST A CLOCK...", 150,400);
  fill(133,245,343);
  textSize(24);
  textStyle("bold"); 
  text("BECAUSE IT USUALLY GIVES SECOND HAND INFORMATION :))))", 150,450);
  

translate(500,200)
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke(172,239,209);
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("green");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(255,102,255);
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("red");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  }
  