let counter = document.getElementById('counterValue');
function onIncrement(){
    let newcounter = counter.textContent;
    let updatecounter  = parseInt(newcounter)+1;
   if(updatecounter>0){
    counter.style.color="green";
   }
   else if(updatecounter<0){
    counter.style.color="red";
   }
   else {
    counter.style.color="black";
   }
   counter.textcontent = updatecounter;
}

function onDecrement(){
    let newcounter = counter.textContent;
    let updatecounter  = parseInt(newcounter)-1;
   if(updatecounter>0){
    counter.style.color="green";
   }
   else if(updatecounter<0){
    counter.style.color="red";
   }
   else {
    counter.style.color="black";
   }
   counter.textcontent = updatecounter;
}

