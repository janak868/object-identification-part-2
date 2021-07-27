img ="";
status="";
object = [];

function preload () {
 img = loadImage ('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:DetectingObjects";
}

function draw () {
    image(img,0,0,640,420);
    if(status !="")
    {
        for(i = 0; i < object.length; i++ )
    {
        document.getElementById("status").innerHTML ="status:ObjectDetected"

        fill('#FF0000');
        percent = floor(object[i].confidence * 100);
    text(objects[i].label +" " + percent + "%",objects[i].x,objects[i].y)
    noFill();
    stroke("#FF0000");
    rect (objects[i].x,objects[i].y,objects[i].width ,objects[i].length
    }
    
    
    }
}

function modelLoaded() {
    console.log("Model Loaled!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results
}