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
    if (operator === 'add') {
        return add(num1, num2)
    } else if (operator === 'subract') {
        return subtract(num1, num2)
    } else if (operator === 'multiply') {
        return multiply(num1, num2)
    } else if (operator === 'divide') {
        return divide(num1, num2)
    } else {
        return 'error operator not recognized'
    }
}


function makeNumButtons() {
    const container = document.querySelector('.button-container')
    const numButtons = document.createElement('div')
    numButtons.className = 'numDiv'
    container.appendChild(numButtons)
    for (let i = 1; i < 10; i++) {
        // document.createElement('div')
        const button = document.createElement('div')
        numButtons.appendChild(button)
        button.innerHTML = `${i}`
        button.value = `${i}`
        button.className = `numButton ${i}`
        button.addEventListener("click", (e) => console.log(e.target.value))
    }
}

const opButtons = document.createElement('div')
opButtons.className = 'opDiv'
const container = document.querySelector('.button-container')
container.appendChild(opButtons)

function makeOperators(operator, opVal) {
    const opButton = document.createElement('div')
    opButton.innerHTML = `${operator}`
    opButton.value = `${opVal}`
    opButton.className = `operators ${opVal}`
    opButton.addEventListener("click", (e) => console.log(e.target.value))
    opButtons.appendChild(opButton)
}


const clearBtn = document.createElement('div')
clearBtn.className = 'clear btn'
clearBtn.innerHTML = 'AC'
container.appendChild(clearBtn)

const delBtn = document.createElement('div')
delBtn.className = 'del btn'
delBtn.innerHTML = 'DEL'
container.appendChild(delBtn)

const equalBtn = document.createElement('div')
equalBtn.className = 'equal btn'
equalBtn.innerHTML = '='
container.appendChild(equalBtn)


const decBtn = document.createElement('div')
decBtn.className = 'dec btn'
decBtn.innerHTML = '.'
container.appendChild(decBtn)

const zeroBtn = document.createElement('div')
zeroBtn.className = 'zero btn'
zeroBtn.innerHTML = '0'
container.appendChild(zeroBtn)

makeOperators('-', 'subtract')
makeOperators('+', 'add')
makeOperators('*', 'multiply')
makeOperators('÷', 'divide')
// makeOperators('.', 'decimal')
makeNumButtons()



// function makeOtherBtns(operator, opVal) {
//     const opButton = document.createElement('div')
//     opButton.innerHTML = `${operator}`
//     opButton.value = `${opVal}`
//     opButton.className = `operators ${opVal}`
//     opButton.addEventListener("click", (e) => console.log(e.target.value))
// }

// function makeOperators() {
//     opButtons.className = 'opDiv'
//     const subtractBtn = makeOtherBtns('-', 'subtract')
//     const addBtn = makeOtherBtns('+', 'add')
//     const multiplyBtn = makeOtherBtns('*', 'multiply')
//     const divideBtn = makeOtherBtns('÷', 'divide')
//     opButtons.appendChild(subtractBtn)
//     opButtons.appendChild(addBtn)
//     opButtons.appendChild(multiplyBtn)
//     opButtons.appendChild(divideBtn)
// }
