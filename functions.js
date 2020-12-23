console.log("JS here...");

function getInput(id){
    let val = document.getElementById(id).value;
    return val;

}

function alertInput(id){
    alert ("Your Input is :) = " + getInput(id));
}


function logInput(id){
    console.log ("Your Input is :) = " + getInput(id));
}


