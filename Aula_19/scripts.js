const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // add digit to calculator screen
    addDigit(digit) {
        console.log(digit);
        // check if number already as a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
           return; 
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // process all calculator operations
    processOperation(operation) {
        // check if current value is empty
        if(this.currentOperationText.innerText === "" && operation !== "." && operation !== "C"){
            // change operation
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        }

        // get current and previous values
        let operationValue;
        let previous = +this.previousOperationText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentOperator();
                break;
            case "C":
                this.processClearOperator();
                break;
            case "=":
                this.processEqualOperator();
                break;
            default:
                return;
        }
    }

    // change values of calculator screen
    updateScreen(operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
        ){
        if(operationValue === null){
            // append number to current value
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // check if value is zero, if is just add current value
            if(previous === 0){
                operationValue = current;
            }

            // add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }

    // change math operation
    changeOperation(operation){
        const mathOperations = ["*", "-", "+", "/"];

        if(!mathOperations.includes(operation)){
            return;
        }

    this.previousOperationText.innerText = this.currentOperationText.innerText.slice(0, -1) + operation;
    }

    // delete a digit
    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    // clear current operation
    processClearCurrentOperator(){
        this.currentOperationText.innerText = "";
    }

    // clear all operations
    processClearOperator(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }

    // process an operation
    processEqualOperator(){
        let operation = this.previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            console.log(value);
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});
