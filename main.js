noseX = 0;
noseY = 0;

function preload()
{
    mango = loadImage('https://i.postimg.cc/J7b3zJ3H/mango-png.png');
}

function setup()
{
    canvas = createCanvas( 400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image(mango, noseX, noseY, 40, 40);
}

function take_snapshot()
{
    save('myFilterImage.png');
}