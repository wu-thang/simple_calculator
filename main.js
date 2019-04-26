function add(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

// document.querySelectorAll('#numbers').addEventListener('click', );
let number = '';
let operation = '';
let store = '';

const buttons = document.querySelectorAll('.num');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        number += button.textContent;
        document.querySelector('#display').value = number;
    })
});


const addBtn = document.querySelector('.add');
if (addBtn) {
    addBtn.addEventListener('click', () => {
        store = number;
        operation = 'add';
        console.log(store);
        console.log(operation);
        number = '';
    });
}

const subBtn = document.querySelector('.subtract');
if (subBtn) {
    subBtn.addEventListener('click', () => {
        store = number;
        operation = 'subtract';
        console.log(store);
        console.log(operation);
        number = '';
    });
}

const multiplyBtn = document.querySelector('.multiply');
if (multiplyBtn) {
    multiplyBtn.addEventListener('click', () => {
        store = number;
        operation = 'multiply';
        console.log(store);
        console.log(operation);
        number = '';
    })
}

const divideBtn = document.querySelector('.divide');
if (divideBtn) {
    divideBtn.addEventListener('click', () => {
        store = number;
        operation = 'divide';
        console.log(store);
        console.log(operation);
        number = '';
    })
}

const decimalBtn = document.querySelector('.decimal');
if(decimalBtn) {
    decimalBtn.addEventListener('click', () => {
        if (number.toString().includes('.') ) {
            document.querySelector('#display').value = number;
        } else {
            number += '.';
            document.querySelector('#display').value = number;
            console.log(number);
        }
    });
}

const clearBtn = document.querySelector('.allClear');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        number = '';
        store = '';
        document.querySelector('#display').value = number;
    });
}

function formatNum(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return num.toFixed(2);
    }
}

const equalBtn = document.querySelector('.equal');
if (equalBtn) {
    equalBtn.addEventListener('click', () => {
        switch (operation) {
            case 'subtract':
                number = operate(subtract, store, number);
                document.querySelector('#display').value = formatNum(number);
                console.log(number);
                break;
            case 'add':
                number = operate(add, store, number);
                document.querySelector('#display').value = formatNum(number);
                console.log(number);
                break;
            case 'multiply':
                number = operate(multiply, store, number);
                document.querySelector('#display').value = formatNum(number);
                console.log(operation);
                break;
            case 'divide':
                if (number == 0) {
                    document.querySelector('#display').value = 'ERROR!@ Please do not divide by 0';
                    break;
                }
                number = operate(divide, store, number);
                document.querySelector('#display').value = formatNum(number);
                console.log(number);
                break;
        }
    });
}