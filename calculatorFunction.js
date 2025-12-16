// targeting the display
let display = document.getElementById("display");


// function to add character to the display
function appendCharacter(character){
    display.value += character;
}


// function to clear the display
function clearDisplay(){
    display.value = "";
}

// function to delete the last character
function deleteLast(){
    display.value = display.value.slice(0, -1);
}


// function to calculate and display the result
function calculateResult(){
    try{
display.value = eval(display.value); //this solves the mathematical expression
    }catch(error){

display.value = "Error" //handle's incorrect expressions
    }
}