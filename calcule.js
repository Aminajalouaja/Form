const display= document.getElementById("dispaly");

function appendToDisplay(input){
display.value += input;
}
function clearDispay(){
display.value ="";
}

function calculate(){
    
        display.value =eval(display.value); 
    
}