let count = document.getElementById("counterValue");
function onIncrement(){
    let newCount = count.textContent;
    let updateCount = parseInt(newCount)+1 
    if(updateCount>0){
        count.style.color="green";
    }
    else if(updateCount<0){
        count.style.color="red";
    }
    else{
        count.style.color="black";
    }
    count.textContent = updateCount;
}
function onDecrement(){
    let newCount = count.textContent;
    let updateCount = parseInt(newCount)-1 
    if(updateCount>0){
        count.style.color="green";
    }
    else if(updateCount<0){
        count.style.color="red";
    }
    else{
        count.style.color="black";
    }
    count.textContent = updateCount;
}

function onReset(){
    let val = 0;
    count.textContent = val;
    count.style.color="black";
}