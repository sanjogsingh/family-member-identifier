Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach("#camera")





function takePic()
{
    Webcam.snap(function(src ){
   document.getElementById("holdCam").innerHTML="<img style='width:320px; height:190px;' src='"+src+"' id='Object'>  "
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UdMzIw5RR/model.json",modelloaded)


function modelloaded()
{
    console.log("success")
}

console.log("version-"+ml5.version)

function identify()
{
    img=document.getElementById("Object")
    classifier.classify(img,gotResult)
}

function gotResult(error,result)
{
if(error) 
{
    console.log(error)
   
}
else{
    console.log(result)
objectName=result[0].label
objectPercentage=result[0].confidence
document.getElementById("object").innerHTML=objectName
document.getElementById("Accuracy").innerHTML=objectPercentage.toFixed(4)
}

}

