var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function (event) {

    console.log(event);

 var Content = event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML = Content;
 console.log(Content);
 if(Content == "take my selfie")
 {
     console.log = ("taking the selfie ---");
     speak();
 }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
    take_snapshot();
    Save();
    },5000);
}
Webcam.set({
    width:400,
    height:300,
    image_format:'png', 
    png_quality:90
})
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("picture").innerHTML = '<img id="selfie" src="'+data_uri+'">'; 
    });
}
function Save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    document.getElementById("link").href = image;
    link.click();
}