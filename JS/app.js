function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-field');
    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number == 'C') {
            typeNumberField.value = '';
        }
        else if (number == '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;

        }

    }

    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})


document.getElementById('verified-pin').addEventListener('click', function () {
    const displayField = document.getElementById('display-pin');
    const currentPin = displayField.value;

    const typeNumberField = document.getElementById('type-field');
    const typeNumber = typeNumberField.value;

    const pinSuccess = document.getElementById('success');
    const pinFailure = document.getElementById('not-success');

    if (typeNumber == currentPin) {
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else {

        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})