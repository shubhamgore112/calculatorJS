const display = document.getElementById("display");
const buttonsPanel = document.getElementById("buttons-panel");
const buttonsOperator = document.querySelectorAll(".operator");
const buttonsOperand = document.querySelectorAll(".operand");
const clrDel = document.querySelectorAll(".delete-clear-button");
// console.log(buttonsOperand);

// initialization
let firstNo = "";
let secondNo = "";

// buttonsOperator.forEach((button)=>{
//     changeDisplay(button);
// });
// buttonsOperand.forEach((button) => {
//     button.addEventListener('click', () => operandFunc(button.value));}
// );

for(let i=0; i<buttonsOperand.length; i++){
    // console.log(buttonsOperand[i]);
    changeDisplay(buttonsOperand[i]);
}

for(let i=0; i<buttonsOperator.length; i++){
    operatorFunc(buttonsOperator[i]);
}

for(let i=0; i<clrDel.length; i++){
    if(clrDel[i]=="clr"){
        clrScreen(clrDel[i]);
    }
    else{
        backspace(clrDel[i]);
    }
}

// clear screen
function clrScreen(button){
    button.addEventListener("click",function(){
        firstNo = "";
        secondNo = "";
        op="";
        display.innerHTML="";
        console.log("clr executed");
    })
}
function backspace(button){
    console.log("del executed");
}

// adding digits to display
function changeDisplay(button){
    // console.log(button);
    button.addEventListener("click",function(){
    let buttonVal = button.getAttribute("value");
    displayNumber(buttonVal);
    });
}

function operatorFunc(button){

    button.addEventListener("click",function(){
        if(button=="="){
            console.log("= execited");
            secondNo = display.innerHTML;
            let answer = operator(op,firstNo,secondNo);
            console.log(answer);
            display.innerHTML=answer;
        }else{
            console.log("else executed");
        op = button;
        firstNo = display.innerHTML;
        display.innerHTML="";
        }
    });   
}


function displayNumber(buttonVal){
    display.innerHTML+=buttonVal;
}



// basic operation functions
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}

// call of operations
function operator(op,x,y){
    switch(op){
        case "+":
            add(x,y);
            break;
        case "-":
            subtract(x,y);
            break;
        case "*":
            multiply(x,y);
            break;
        case "/":
            division(x,y);
            break;
        default:
            console.log("Symbol unindentified");
    }
}

// function to change display value
// function populate_display(val){
//     display.textContent=val;
// }


// else if(buttonVal=="="){
//     let currNumber = display.innerHTML;
//     display.innerHTML="";
//     operator(op,currNumber,prevNumber);

// }
// else{
// let prevNumber = display.innerHTML;
// display.innerHTML="";
// let op = buttonVal;

// }
