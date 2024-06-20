function add(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "result :" + (num1 + num2);

}

function substract(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "result :" + (num1 - num2);

}

function multiply(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "result :" + num1 * num2;

}
function divide(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if(num2 === 0){
        document.getElementById("result").innerHTML = "Error : division by zero";  
    }
    else{
        document.getElementById("result").innerHTML = "result :" + num1 / num2;
    }

}