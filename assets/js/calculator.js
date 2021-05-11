import validator from 'validator';
import { errorCleanUp, handleformErrors } from '../helpers/errorMessage';

if (document.querySelector('.calculator-content')) {

    const operationButtons = document.querySelectorAll('[data-opetation]');

    const formValidation = () => {
        const number1 = document.getElementById('number1').value;
        const number2 = document.getElementById('number2').value;

        const errorMsg = {};

        if (validator.isEmpty(number1) || !validator.isNumeric(number1)) {
            errorMsg['number1'] = 'El Numero 1 debe ser numerico y no estar vacio';
        }

        if (validator.isEmpty(number2) || !validator.isNumeric(number2)) {
            errorMsg['number2'] = 'El Numero 2 debe ser numerico y no estar vacio';
        }

        return errorMsg;
    }
    
    const showResult = (result) => {

        const resultEl = document.getElementById('result');

        if (resultEl) {
            resultEl.remove();
        }
        
        const elementRef = document.querySelector('.contact-form-inputs');
        const span = document.createElement('span');
        span.innerHTML = `El resultado de la opreación es: ${result}`;
        span.id = 'result';

        elementRef.append(span);
    }
    

    const handleOperationClick = (value) => {
        errorCleanUp();
        const formValidated = formValidation();

        if (Object.entries(formValidated).length > 0) {
            handleformErrors(formValidated);
            return;
        }
        
        const number1 = document.getElementById('number1').value;
        const number2 = document.getElementById('number2').value;

        let result;

        switch (value) {
            case '+':
                result = parseInt(number1) + parseInt(number2);
                break;
            case '-':
                result = parseInt(number1) - parseInt(number2);
                break;
            case '*':
                result = parseInt(number1) * parseInt(number2);
                break;
            case '/':
                if (parseInt(number2) === 0) {
                    result = 'Infinito'
                    break;
                }
                
                result = parseInt(number1) / parseInt(number2);
                break;
            default:
                break;
        }

        showResult(result);

    }
    
    
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperationClick(button.value);
        })
    });
}
