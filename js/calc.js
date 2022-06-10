/*function doMath(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    console.log(number1);
    console.log(number2);
    let finnish =parseInt(number1) + parseInt(number2);
    console.log(finnish);
    let p =document.getElementById('summa');
    p.innerHTML = finnish;
}*/



function doPlus(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) + parseInt(number2);
    let p =document.getElementById('summa');
    p.innerHTML = finnish;
}

function doMinus(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) - parseInt(number2);
    let p =document.getElementById('summa');
    p.innerHTML = finnish;
}

function doSzor(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) * parseInt(number2);
    let p =document.getElementById('summa');
    p.innerHTML = finnish;
}

function doOszt(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) / parseInt(number2);
    let p =document.getElementById('summa');
    p.innerHTML = finnish;
}

function doClear(){
    document.getElementById('summa').innerHTML = "";
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}