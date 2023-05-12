
let backgroundImg=[];
backgroundImg[1]='img/1.jpg'
backgroundImg[2]='img/2.jpg'
backgroundImg[3]='img/3.jpg'
backgroundImg[4]='img/4.jpg'
backgroundImg[5]='img/5.jpg'

function randomBackground(a,b){
    return Math.floor(Math.random()*(b-a)+a);
}

let random1= randomBackground(1,6);

document.body.style.backgroundImage=`url(${backgroundImg[random1]})`; 

let signUp = document.getElementById("sign-in");

function closeButton(){
    signUp.style.display= "none";
}

function userButton(){
    signUp.style.display= "block";
}