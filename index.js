const hourE1= document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const SecondsE1=document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
     let ampm= "AM";
     if(h>12){
        h=h-12;
        ampm="PM";
     }
     else{
      ampm="AM"
     }
       h=h <10 ? h="0"+ h: h;
       m=m <10 ? m="0"+ m: m;
       s=s <10 ? s="0"+ s: s;
     hourE1.innerText= h;
     minutesE1.innerText=m;
     SecondsE1.innerText= s;
     ampmE1, (innerText= ampm);
     setTimeout(()=>{
        updateClock();

     },1000)

     


}
updateClock()