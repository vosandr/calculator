let firstNumber = ''; //first number
let secondNumber = ''; //second number
let sign = ''; // Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'x', '+', '-'];

// Экран
const out = document.querySelector('.calc-screen p');

function clearAll(){
    firstNumber='';
    secondNumber='';
    sign='';
    finish=false;
    out.textContent=0;
}

document.querySelector('.ac').onclick=clearAll();

document.querySelector('.buttons').onclick=(event)=>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (secondNumber === '' &&sign=== ''){
        firstNumber+=key;
        console.log(firstNumber, secondNumber, sign);
        out.textContent=firstNumber;
        }
        else if (firstNumber!=='' && secondNumber!=='' && finish){
            secondNumber = key;
            finish = false;
            out.textContent = secondNumber;
        }

        else {
            secondNumber += key;
            out.textContent=secondNumber;
        }
    }
    if (action.includes(key)){
        sign=key;
        out.textContent=sign;
        console.log(firstNumber, secondNumber, sign);
        return;
    }

    if ( key === '='){
        if (secondNumber==='') secondNumber=firstNumber;
        switch (sign){
            case "+":
                firstNumber=(+firstNumber)+(+secondNumber);
                break;
            case "-":
                firstNumber-=secondNumber;
                break;
            case "x":
                firstNumber*=secondNumber;
                break;
            case "/":
                firstNumber/=secondNumber;
                break;
        }
        finish=true;
        out.textContent=firstNumber;
        console.table(firstNumber, secondNumber, sign)
    }
}