function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 % num2
}

function operate(num1, num2, operator) {
    operator = operator.toLowerCase()
    if (operator === 'plus') {
        return add(num1, num2)
    } else if (operator === 'minus') {
        return subtract(num1, num2)
    } else if (operator === 'multiplied by') {
        return multiply(num1, num2)
    } else if (operator === 'divided by') {
        return divide(num1, num2)
    } else {
        return 'error operator not recognized'
    }
}

//make body
const body = document.querySelector("body")

//make form
const form = document.createElement("form")
body.appendChild(form)

//make first input
const firstInput = document.createElement('input')
firstInput.setAttribute('type', 'number')
form.appendChild(firstInput)
firstInput.id = "firstInput"
firstValue = document.getElementById('firstInput').value
console.log(firstValue)

//make dropdown menu
const operators = document.createElement("select")
form.appendChild(operators)
operators.id = "operators"

//make second input
const secondInput = document.createElement('input')
secondInput.setAttribute('type', 'number')
form.appendChild(secondInput)
secondInput.id = "secondInput"
secondValue = document.getElementById('secondInput').value
console.log(secondValue)


//make button
const button = document.createElement('button')
body.appendChild(button)
button.textContent = '='
button.addEventListener('click', calculate)

//make calculated value text
const text = document.createElement('h1')
body.appendChild(text)
text.textContent = '0'

function createOptions(arr) {
    for (let i = 0; i < arr.length; i++) {
        option = document.createElement("option");
        option.text = arr[i];
        option.value = arr[i];
        operators.appendChild(option)
    }
}

createOptions(['plus', 'minus', 'multiplied by', 'divided by'])

function calculate() {
    firstValue = parseInt(document.getElementById('firstInput').value)
    secondValue = parseInt(document.getElementById('secondInput').value)
    operatorValue = document.getElementById('operators').value
    // console.log(firstValue, operatorValue, secondValue)
    // console.log(operate(firstValue, secondValue, operatorValue))
    text.textContent = (operate(firstValue, secondValue, operatorValue))

}