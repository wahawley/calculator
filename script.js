let firstNum=undefined;
let secondNum=undefined;
let operator=undefined;
let result;
let displayValue=[];


function calculator () {

buttons();


}

function buttons (){
    let buttonsDiv=document.querySelector(".buttons");
    let display=document.querySelector(".displayText");


    buttonsDiv.addEventListener("click", (event) => {
        let input=event.target.textContent;
        //numbers
        if (!isNaN(input)) {
            displayValue.push(event.target.textContent);
            display.textContent=displayValue.join("");
        }
        //clear button
        else if (input=="C") {
            displayValue=[];
            display.textContent="0";
            firstNum=undefined;
            secondNum=undefined;
            operator=undefined;
        }
        //operands
        else if (input=="+" || input== "-" || input=="×" || input=="÷") {
            //first time operand is pressed
            if(firstNum===undefined) {
                switch (event.target.textContent) {
                    case "+":
                        firstNum=Number(displayValue.join(""));
                        operator="+";
                        displayValue=[];
                        break;
                    case "-":
                        firstNum=Number(displayValue.join(""));
                        operator="-";
                        displayValue=[];
                        break;
                    case "×":
                        firstNum=Number(displayValue.join(""));
                        operator="*";
                        displayValue=[];
                        break;
                    case "÷":
                        firstNum=Number(displayValue.join(""));
                        operator="/";
                        displayValue=[];
                        break;
                }
            }
            //every time after the first operand is pressed
            else {
                switch (event.target.textContent) {
                    case "+":
                        secondNum=Number(displayValue.join(""));
                        operate(firstNum,secondNum,operator);
                        if (isFinite(result)) {
                            firstNum=result;
                            operator="+";
                            displayValue=[];
                            display.textContent=parseFloat(result);
                        }
                        else {
                            firstNum=undefined;
                            secondNum=undefined;
                            operator=undefined;
                            displayValue=[];
                            display.textContent="ERROR";
                        }
                        break;
                    case "-":
                        secondNum=Number(displayValue.join(""));
                        operate(firstNum,secondNum,operator);
                        if (isFinite(result)) {
                            firstNum=result;
                            operator="-";
                            displayValue=[];
                            display.textContent=parseFloat(result);
                        }
                        else {
                            firstNum=undefined;
                            secondNum=undefined;
                            operator=undefined;
                            displayValue=[];
                            display.textContent="ERROR";
                        }
                        break;
                    case "×":
                        secondNum=Number(displayValue.join(""));
                        operate(firstNum,secondNum,operator);
                        if (isFinite(result)) {
                            firstNum=result;
                            operator="*";
                            displayValue=[];
                            display.textContent=parseFloat(result);
                        }
                        else {
                            firstNum=undefined;
                            secondNum=undefined;
                            operator=undefined;
                            displayValue=[];
                            display.textContent="ERROR";
                        }
                        break;
                    case "÷":
                        secondNum=Number(displayValue.join(""));
                        operate(firstNum,secondNum,operator);
                        if (isFinite(result)) {
                            firstNum=result;
                            operator="/";
                            displayValue=[];
                            display.textContent=parseFloat(result);
                        }
                        else {
                            firstNum=undefined;
                            secondNum=undefined;
                            operator=undefined;
                            displayValue=[];
                            display.textContent="ERROR";
                        }
                        break;
                }
            }
        }
        //equals button
        else if (input=="=") {
            if (firstNum!==undefined && secondNum!==undefined && operator!==undefined) {
                secondNum=Number(displayValue.join(""));
                operate(firstNum,secondNum,operator);
                if (isFinite(result)) {
                    firstNum=result;
                    displayValue=[];
                    display.textContent=parseFloat(result);
                }
                else {
                    firstNum=undefined;
                    secondNum=undefined;
                    operator=undefined;
                    displayValue=[];
                    display.textContent="ERROR";
                }
            }
            else {
                display.textContent=displayValue.join("ERROR");
                displayValue=[];
            }
        }  
    });


}

function operate (num1,num2,oper) {
    switch (oper) {
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
    }
}

function add (num1,num2) {
    num1=Number(num1);
    num2=Number(num2);
    result=Number(num1+num2).toFixed(8);
    return result;
}

function subtract (num1,num2) {
    num1=Number(num1);
    num2=Number(num2);
    result=Number(num1-num2).toFixed(8);
    return result;
}

function multiply (num1,num2) {
    num1=Number(num1);
    num2=Number(num2);
    result=Number(num1*num2).toFixed(8);
    return result;
}

function divide (num1,num2) {
    num1=Number(num1);
    num2=Number(num2);
    result=Number(num1/num2).toFixed(8);
    return result;
}

calculator();
