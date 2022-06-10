



function doPlus(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) + parseInt(number2);
    if(isNaN(finnish)){
        document.getElementById('summa').innerHTML = "";    
    }else{
    document.getElementById('summa').innerHTML = finnish;
    };
}

function doMinus(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) - parseInt(number2);
     if(isNaN(finnish)){
        document.getElementById('summa').innerHTML = "";    
    }else{
    document.getElementById('summa').innerHTML = finnish;
    };
    
}

function doSzor(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) * parseInt(number2);
     if(isNaN(finnish)){
        document.getElementById('summa').innerHTML = "";    
    }else{
    document.getElementById('summa').innerHTML = finnish;
    };
    
}

function doOszt(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let finnish =parseInt(number1) / parseInt(number2);
     if(isNaN(finnish)){
        document.getElementById('summa').innerHTML = "";    
    }else{
    document.getElementById('summa').innerHTML = finnish;
    };
    
}

function doClear(){
    document.getElementById('summa').innerHTML = "";
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}