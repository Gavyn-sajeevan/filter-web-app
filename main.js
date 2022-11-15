moustacheX=0
moustacheY=0

function preload(){
moustache=loadImage('https://media2.giphy.com/media/PoG4xhTgbPejy9jZQB/source.gif')
}

function setup()
{
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    vedio.hide()

    poseNet=ml5.poseNet(vedio,modelLoaded)
    PoseNet.on('pose',gotPoses)

}

function draw(){
    image(vedio,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    circle(noseX,noseY,20)
    image(clown_nose,noseX,noseY,30,30)

}

function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX= results[0].pose.nose.x
        noseY=results [0].pose.nose.y
    
        console.log("nose x =" + noseX)
        console.log("nose y =" + noseY)
    }
}