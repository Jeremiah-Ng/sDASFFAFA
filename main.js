var prediction_1="pneumonoultramicroscopicsilicovolcanoconiosis";
var prediction_2="supercalifragilisticexpialidocious";
Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90,
});
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>"
    });
}
console.log("ml5 version :",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wyGrrOTj6/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function speak(){
    var Synth=window.speechSynthesis;
    speech_data_1="The first prediction is "+prediction_1;
    speech_data_2=" and the second prediction is "+prediction_2;
    utterThis=new SpeechSynthesisUtterance(speech_data_1+speech_data_2);
    Synth.speak(utterThis);
}
function identify(){
    img=document.getElementById("image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        document.getElementById("result_emotion_name").innerHTML=prediction_1;
        document.getElementById("result_emotion_name2").innerHTML=prediction_2;
        speak();
        if(prediction_1=="Thumbs Up"){
            document.getElementById("update_emotion").innerHTML="&#128077";
        }
        
        else if(prediction_1=="Ok"){
            document.getElementById("update_emotion").innerHTML="&#128076";
        }
        
        else if(prediction_1=="Victory"){
            document.getElementById("update_emotion").innerHTML="&#9996";
        }
        if(prediction_2=="Thumbs Up"){
            document.getElementById("update_emotion2").innerHTML="&#128077";
        }
        
        else if(prediction_2=="Ok"){
            document.getElementById("update_emotion2").innerHTML="&#128076";
        }
        
        else if(prediction_2=="Victory"){
            document.getElementById("update_emotion2").innerHTML="&#9996";
        }
    }
}
var x=1
function update(){
    document.getElementById("dropdown").style.visibility="visible";
    document.getElementById("dropdown").style.height="auto";
    if(x==2){
    document.getElementById("stuff").innerHTML="<label id='change' onclick='closing()'>File Upload - </label>"
    }else if(x==1){
         document.getElementById("stuff").innerHTML="<label id='change' onclick='closing()'>Webcam View - </label>"  
     }
}
function closing(){
    console.log("works")
    document.getElementById("dropdown").style.visibility="hidden";
    document.getElementById("dropdown").style.height="0px";
     if(x==2){
        document.getElementById("stuff").innerHTML="<label id='change' onclick='update()'>File Upload - </label>"   
     }else if(x==1){
         document.getElementById("stuff").innerHTML="<label id='change' onclick='update()'>Webcam View - </label>"  
     }
     }
function webcam(){
    x=1;
            document.getElementById("dropdown").style.height="0px";
      document.getElementById("dropdown").style.visibility="hidden";
      document.getElementById("stuff").innerHTML="<label id='change' onclick='update()'>Webcam View - </label>"
    document.getElementById("camera").innerHTML="";
    document.getElementById("change").innerHTML="Webcam View - "
    Webcam.attach('#camera');
    document.getElementById("camera1").style.visibility="hidden";
    document.getElementById("camera1").style.height="0px";
    document.getElementById("camera").style.visibility="visible";
    document.getElementById("camera").style.height="300px";
}
function files(){
    x=2;
    console.log("yes")
           document.getElementById("dropdown").style.height="0px";
      document.getElementById("dropdown").style.visibility="hidden";
      document.getElementById("stuff").innerHTML="<label id='change' onclick='update()'>Webcam View - </label>"
    document.getElementById("camera").innerHTML="";
    document.getElementById("change").innerHTML="File Upload - "
   document.getElementById("camera1").style.visibility="visible";
   document.getElementById("camera1").style.height="300px";
   document.getElementById("camera").style.visibility="hidden";
   document.getElementById("camera").style.height="0px";
}