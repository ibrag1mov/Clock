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
