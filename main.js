var equation = document.getElementById('equation');
var result = document.getElementById('result');
var onStatus = document.getElementById('onOffButton');;

function on(){
    if(onStatus.innerText == "ON"){
        equation.value = "_";
        result.value = 0;
        onStatus.innerText = "OFF";
    }
    else{
        equation.value = null;
        result.value = null;
        onStatus.innerText = "ON";
    }
}

function ac(){
    if(onStatus.innerText == "OFF"){
        equation.value = "_";
        result.value = 0;
    }
}

function add(ch){
    if(onStatus.innerText == "OFF"){
        if(equation.value == "_"){ 
            equation.value = ch;
        }
        else{
            equation.value += ch;
        }
    }
}

