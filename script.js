function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let resultValue;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            resultValue = (inputValue * 9 / 5) + 32;
        } else if (toUnit === 'kelvin') {
            resultValue = inputValue + 273.15;
        } else {
            resultValue = inputValue;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            resultValue = (inputValue - 32) * 5 / 9;
        } else if (toUnit === 'kelvin') {
            resultValue = (inputValue - 32) * 5 / 9 + 273.15;
        } else {
            resultValue = inputValue;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            resultValue = inputValue - 273.15;
        } else if (toUnit === 'fahrenheit') {
            resultValue = (inputValue - 273.15) * 9 / 5 + 32;
        } else {
            resultValue = inputValue;
        }
    } else {
        resultValue = inputValue;
    }

    document.getElementById('resultValue').value = resultValue.toFixed(2);
}
