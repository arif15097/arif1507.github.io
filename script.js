const numbers = document.querySelectorAll(".number")
console.log(numbers)
/*NodeList(10) [button.number, button.number, 
    button.number, button.number, button.number, 
    button.number, button.number, button.number, 
    button.number, button.number.zero-btn]
    0: button.number
    1: button.number
    2: button.number
    3: button.number
    4: button.number
    5: button.number
    6: button.number
    7: button.number
    8: button.number
    9: button.number.zero-btn
    length: 10
    
*/
const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=> {
    console.log(number)
})

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=> {
    number.addEventListener("click", () =>{
        console.log("number is pressed")
    })
})

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=> {
    number.addEventListener("click", (event) =>{
        console.log(event.target.value)
    })
})

const calculatorScreen = document.querySelectorAll('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value  = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>{
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
    currentNumber = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    currentNumber += number
}

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

const operator = document.querySelectorAll(".operator")

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equal-Sign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = prevNumber + currentNumber
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break

    }
}

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = prevNumber + currentNumber
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            return

    }
    currentNumber =result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
    }
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

case '+':
    result = parseFloat(prevNumber) + parseFloat(currentNumber)
    break

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber =currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}