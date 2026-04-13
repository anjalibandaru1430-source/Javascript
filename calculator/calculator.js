function insert(value){
    document.getElementById("display").value += value;
}

function clearResult(){
    document.getElementById("display").value = "";
}

function calculate(){
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}