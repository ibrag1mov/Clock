"use strict"


// dark-light

let DarkLight=$('.dark-light');
let darkLighImg=$('.dark-light-img');

var a, b;

 b="linear-gradient(to right, #324b50, #204252, #01122f)";


DarkLight.addEventListener('click', (evt)=>{
  darkLighImg.classList.toggle('dark');

  if(darkLighImg.classList.contains('dark')){
    darkLighImg.src="images/moon-stars.svg";     
    a='linear-gradient(to right,#119eba, #0e849c, #095463)'; 
  
    if(a){
      document.body.style.background=a;
    }
  }

  else{
    darkLighImg.src="images/sunny.svg";
    a='linear-gradient(to right, #324b50, #204252, #01122f)';
    if(a){
      document.body.style.background=a;
    }
  }
})

if(a){
  document.body.style.background=a;
}

else{
    document.body.style.background=b;
} 

// timer

var hours = 0;
var minutes = 0;
var seconds = 0;
var tens = 0;
var OutputHours = $('#hour')
var OutputMinutes = $('#minut')
var OutputSeconds = $('#second');
var OutputTens = $('#tens');
var btnStart = $('#btn-start');
var btnStop = $('#btn-stop');
var btnReset = $('#btn-reset');
var Interval;


btnStart.addEventListener('click', ()=>{
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});

btnStop.addEventListener('click', ()=>{
  clearInterval(Interval);
});

btnReset.addEventListener('click', ()=>{
  clearInterval(Interval);
  hours = '00';
  minutes = '00';
  tens = '00';
  seconds = '00';
  OutputHours.innerHTML=hours;
  OutputMinutes.innerHTML=minutes;
  OutputSeconds.innerHTML=seconds;
  OutputTens.innerHTML=tens;
});

function startTime(){
  tens++;
  if(tens <= 9){
    OutputTens.innerHTML = "0"+tens;
  }
  else if(tens > 9 && tens < 100){
    OutputTens.innerHTML=tens;
    console.log(tens);
  }
  else if(tens >100){
    seconds++;
    if(seconds<=9){
      OutputSeconds.innerHTML="0"+seconds;
    }
    else if(seconds > 9 && seconds < 60){
      OutputSeconds.innerHTML = seconds;
    }
    else if(seconds >= 60){
      minutes++;
      if(minutes<=9){
        OutputMinutes.innerHTML='0'+minutes;
      }
      else if(minutes > 9 && minutes < 60){
        OutputMinutes.innerHTML=minutes;
      }
      else if(minutes >=60){
        hours++;
        if(hours<=9){
          OutputHours.innerHTML='0'+hours;
        }
        else if(hours>9 && hours<24){
          OutputHours.innerHTML=hours;
        }
        else if(hours >=24){
          hours=0;
          OutputHours.innerHTML='0'+hours;
        }
        minutes=0;
        OutputMinutes.innerHTML='0'+minutes;
      }
      seconds=0;
      OutputSeconds.innerHTML='0'+seconds
    }
    tens=0;
    OutputTens.innerHTML="0"+tens;
  }
}

// drapdown

let btnNavbar=$('.nav-btn');
let btnNavbarImg=$('.nav-btn-img');
let dropdown=$('.dropdown');

btnNavbar.addEventListener('click', ()=>{

  dropdown.classList.toggle('open')

  if(dropdown.classList.contains('open')){
    btnNavbarImg.src="images/x-lg.svg";
  }
  else{
    btnNavbarImg.src="images/hamburger.svg";
  }
  

})

