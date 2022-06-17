// todo
// del func-when it is pressed after entering an operator
// operator pressed after entering 2 nos then answer should be displayed and answer should be firstNo
// extra credit -  fraction display - multiple fractions shouldn't be added


const display = document.getElementById("display");
const buttonsPanel = document.getElementById("buttons-panel");
const buttonsOperator = document.querySelectorAll(".operator");
const buttonsOperand = document.querySelectorAll(".operand");
const clrDel = document.querySelectorAll(".delete-clear-button");
// console.log(buttonsOperand);

// initialization
let firstNo = "";
let secondNo = "";
let op="";
let answer = "";

for(let i=0; i<buttonsOperand.length; i++){
    changeDisplay(buttonsOperand[i]);
}

for(let i=0; i<buttonsOperator.length; i++){
    operatorFunc(buttonsOperator[i]);
}

for(let i=0; i<clrDel.length; i++){
    if(clrDel[i].value=="clr"){
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
    })
}
function backspace(button){
    button.addEventListener("click",function(){
        display.innerHTML = display.innerHTML.slice(0,-1);
    })
}

// adding digits to display
function changeDisplay(button){
    button.addEventListener("click",function(){
    let buttonVal = button.getAttribute("value");
    displayNumber(buttonVal);
    });
}

function operatorFunc(button){

    button.addEventListener("click",function(){
        if(button.value=="."){
            // don't display . if already exists
                displayNumber(button.value);

        }
        else if(button.value=="="){
           equality();
        }
        // else if(op!=""){
        //     equality();
        // }
        else{
            op = button.value;
            firstNo = parseFloat(display.innerHTML);
            display.innerHTML="";
        }
    });   
}

function equality(){
    secondNo = parseFloat(display.innerHTML);
    
    if(isNaN(firstNo)){
        answer=secondNo;
    }
    else{
        answer = operator(op,firstNo,secondNo);}
    // let frac = Number.parseFloat(answer).toFixed(4);
    // console.log(frac);
    display.innerHTML=answer;
    op="";
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
    if(y==0){
        return "You Kiddin' me!"
    }
    return x/y;
}

// call of operations
function operator(op,x,y){
    switch(op){
        case '+':
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return division(x,y);
        default:
            console.log("Symbol unindentified");
    }
}

// function to check if . already exists or not, if yes dont allow user to enter again

