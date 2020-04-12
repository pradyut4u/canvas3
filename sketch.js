var canvas,database
var draw1=[]
var clearButton
var dbdraw1=[]
function setup (){
 canvas=createCanvas(displayWidth,displayHeight)
 canvas.parent('canvascontainer')
 database=firebase.database()
 background("white")
 var clearButton=select('#clearButton')
}
function draw() {
 readData()
 beginShape()
 stroke(10)
 strokeWeight(5)
 noFill()
 for(var i=0; i<dbdraw1.length ; i++){
     console.log(dbdraw1[i].x)
  vertex(dbdraw1[i].x,dbdraw1[i].y)
 }
 endShape()

}
function mouseDragged(){
 var point={x:mouseX,y:mouseY}
 draw1.push(point)
 var draw1rref =database.ref('drawing')
 draw1rref.set({
  pointd:draw1
 })
}

function readData(){
var pointref=database.ref('drawing/')
pointref.on("value",(data)=>{
    dbdraw1=data.val().pointd
    console.log(dbdraw1)
})
}