var equation = document.getElementById('equation');
var result = document.getElementById('result');
var onStatus = document.getElementById('onOffButton');
var lastOp = false;

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
        if(ch == 'ANS'){
            ch = result.value;
        }
        if(equation.value == "_" || lastOp){
            equation.value = ch;
            lastOp = false;
        }
        else{
            equation.value += ch;
        }
    }
}

function del(){
    if(onStatus.innerText == "OFF" && equation.value != '_'){
        lastOp = false;
        if(equation.value.length == 1){
            equation.value = "_";
        }
        else{
            equation.value = equation.value.substring(0,equation.value.length - 1);
        }
    }
}

function calculate(){
    
    result.value = eval(equation.value.replace('X','*'));
    lastOp = true;
}