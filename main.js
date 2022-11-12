function setup(){
    canvas=createCanvas(450,350);
    canvas.center();
    canvas.parent('canvas');

    video=createCapture(VIDEO);
    video.size(450,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    
}
function modelLoaded(){
        console.log("poseNet is Initialized");
    }

function draw(){
        image(video,0,0,450,350);
    }