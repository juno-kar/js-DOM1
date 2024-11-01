function calculate(operation) {
    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();
    let n1 = document.getElementById("num1");
    let n2 = document.getElementById("num2");

    const resultContainer = document.getElementById("result");
    const resultElement = document.querySelector(".result");
    const errorElement = document.getElementById("error");

    resultElement.textContent = '';
    errorElement.textContent = '';

    n1.style.borderWidth = '1px';
    n1.style.borderColor = '#ccc';
    n2.style.borderWidth = '1px';
    n2.style.borderColor = '#ccc';

    if (num1.includes(",")) {
        let temp1 = "";
        for (let i = 0; i < num1.length; i++) {
            temp1 += (num1[i] === ',') ? '.' : num1[i];
        }
        num1 = temp1;
    }

    if (num2.includes(",")) {
        let temp2 = "";
        for (let i = 0; i < num2.length; i++) {
            temp2 += (num2[i] === ',') ? '.' : num2[i];
        }
        num2 = temp2;
    }

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Будь ласка, введіть правильні числові значення в обидва поля.';
        resultContainer.style.display = 'none';

        if (!num1 || isNaN(num1)) {
            n1.style.borderWidth = '3px';
            n1.style.borderColor = 'red';
        }
        if (!num2 || isNaN(num2)) {
            n2.style.borderWidth = '3px';
            n2.style.borderColor = 'red';
        }
        return;
    } else {

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                errorElement.textContent = 'Ділення на нуль неможливе.';
                resultContainer.style.display = 'none';
                return;
            }
            result = number1 / number2;
            break;
        case 'power':
            result = Math.pow(number1, number2);
            break;
        default:
            errorElement.textContent = 'Невідома операція.';
            resultContainer.style.display = 'none';
            return;
    }

    resultContainer.style.display = 'block';
    resultElement.textContent = (result % 1 === 0) ? result : result.toFixed(2);
    resultElement.style.color = '#e600ff';
}
}
