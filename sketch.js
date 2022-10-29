function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  textSize(30)
  text("X:" +mouseX+"Y:" +mouseY,100,100)//顯示滑鼠移動的座標，位置在100,100
  for(var i=0;i<5;i++)
  
push()
 translate(width/2,height/2)
 ellipse(0,0,400)
 ellipse(0,0,100,50)
 ellipse(-25,0,20)//左鼻孔
 ellipse(+25,0,20)//右鼻孔

 ellipse(-65,-100,45)
 ellipse(+65,-100,45)

 fill(0)
 ellipse(-65+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
 ellipse(+65+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
 fill(225)

 if(mouseIsPressed)
 {
  fill(255,0,0)
  arc(0,74,200,5,0,PI)
 }

pop()
}
