const display = document.getElementById("display");
const buttonsPanel = document.getElementById("buttons-panel");
const buttonsAll = document.querySelectorAll(".buttons");

// creating buttons-panel childs
// for(let i=0;i<16;i++){
//     const button = document.createElement("div");
//     button.classList.add("buttons");
//     // button.innerHTML(i);
//     buttonsPanel.append(button);
// }

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
function populate_display(val){
    display.textContent=val;
}

populate_display(10);