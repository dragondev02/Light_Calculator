let firstNum = 0;
let secondNum = 0;
let operator;

// Lock is used to lock the result in place. Unlock when typing a new set of numbers.
let lock = false;

// If reset is true, clean the screen and start a new row of numbers
let reset = 1;


// Mapping DOM elements
const numberButtons = document.querySelectorAll(".nums");

const operatorButtons = document.querySelectorAll(".operator");

const inputScreen = document.querySelector(".inputNum")

const equal = document.querySelector("#equal");

const allClear = document.querySelector("#allClear"); 

const clear = document.querySelector("#clear");




// Pressing a button appends the number onto the screen

    numberButtons.forEach(element => element.addEventListener("click", appendToScreen));



// Pressing an operator assings the operator a value and resets the screen to make space for second num

    operatorButtons.forEach(element => element.addEventListener("click", declareOperator));


// Pressing the equal key displays the result based on which operators were used

    equal.addEventListener("click", function(){
        if (!lock) inputScreen.textContent = operate(firstNum, operator, secondNum);
        lock = true;
        reset = 1;
      });


// Pressing the AC button resets every value to 0

      allClear.addEventListener("click", clearAll);


// Pressing clear will remove the last number from the screen

      clear.addEventListener("click", clearx);












        // FUNCTIONS

// Appends the pressed number to the screen and removes white spaces
function appendToScreen ()
{

    // If text content is 0 then remove that before writing some numbers
    if (inputScreen.textContent == 0){
        reset = 1;
    }

    if (reset){
        inputScreen.textContent = '';
        reset = 0;
    }


    // If the display is clear of everything else, start writing numbers
    if (!reset){
        inputScreen.append(this.textContent);
        inputScreen.textContent = inputScreen.textContent.replace(/ /g, '');
        lock = false;
    }

}



// Pressing an operator assings the operator a value and resets the screen to make space for second num 

function declareOperator ()
{
    operator = this.id;
    console.log (operator); //test, tbr

    firstNum = parseFloat(inputScreen.textContent);
    console.log(firstNum);


    inputScreen.textContent = '';
    inputScreen.textContent = this.textContent;
    reset = 1;

}


// Perform operation based on the operator
function operate ()
{
    secondNum = parseFloat(inputScreen.textContent);
    

        if (operator === "add"){
            return firstNum + secondNum;
        }
        else if (operator === "substract"){
            return firstNum - secondNum;
        }
        else if (operator === "multiply"){
            return firstNum * secondNum;
        }
        else if (operator === "divide"){
            return firstNum / secondNum;
        }
        else {
            return firstNum % secondNum;
        }

}



// Reset values to 0
function clearAll ()
{
    firstNum = 0;
    secondNum = 0;
    inputScreen.textContent = 0;
    reset = 1;
}


//remove the last number
function clearx ()
{
    let i = inputScreen.textContent.length;
    nums = Array.from(inputScreen.textContent);
    nums = nums.slice(0, i-1);

    inputScreen.textContent = nums;
    inputScreen.textContent = inputScreen.textContent.replace(/,/g, '');
}

