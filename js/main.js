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


var numberHours=$('#box-hours');
var InputHours=$('#hours'); 
var InputMinutes=$('#minutes'); 
var InputSeconds=$('#seconds'); 
var numberNext=document.querySelectorAll('.number-next');
var numberPrev=document.querySelectorAll('.number-prev');
let empty1=0;
let empty2=0;
let empty3=0;





for(let n=0; n<numberNext.length; n++){
  
  
  numberNext[n].addEventListener('click',(evt)=>{
    
    empty1+=1;
    empty2+=1;
    empty3+=1;
    if(evt.target.classList.contains('hours-span')){
      if(empty1>=0 && empty1<100){
          InputHours.value=empty1;
        }
      }
      if(evt.target.classList.contains('minutes-span')){
        if(empty2>=0 && empty2<60){
          InputMinutes.value=empty2;
        }
      }
      if(evt.target.classList.contains('seconds-span')){
        if(empty3>=0 && empty3<60){
          InputSeconds.value=empty3;
        }
      }
      
    })  
  }
  
  // empty1=+InputHours.value;
  // empty2=+InputMinutes.value;
  // empty3=+InputSeconds.value;

  var res={};

InputHours.addEventListener('keypress',(e)=>{
  res[0]=e.key;
  console.log(res);
})


  // for(let i=0; i<100; i++){
  //   InputHours.value=i;
  //   numberHours.appendChild(InputHours);
  // }
  
  
  // let i=InputHours.value;
  
  
  // function nextNum(){
  
  // console.log(numberNext);
  
  
  