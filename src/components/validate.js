const validateInput = () => {
    const inputSearchLocation = document.getElementById('location');
    const spanErrorDisplay = document.querySelector('#display-form-errors > span.error');
    const formSearchWeather = document.getElementById('display-form-errors');

    const checkEventsList = ['input', 'focusout'];

    checkEventsList.forEach((individualEvent) => {
        inputSearchLocation.addEventListener(individualEvent, () => {
            if (!inputSearchLocation.validity.valid) {
                showErrors();
            }
        });
    });

    formSearchWeather.addEventListener('submit', () => {
        if (!formSearchWeather.checkValidity) {
            showErrors();
        }
    });

    const showErrors = () => {
        if (inputSearchLocation.validity.valueMissing) {
            inputSearchLocation.setCustomValidity('Please provide a location!');
            spanErrorDisplay.textContent = 'Error: Please provide a location!';
        } else if (inputSearchLocation.validity.tooShort) {
            inputSearchLocation.setCustomValidity('Location must be at least two characters!');
            spanErrorDisplay.textContent = 'Error: Location must be at least two characters!';
        } else {
            inputSearchLocation.setCustomValidity('');
            spanErrorDisplay.textContent = '';
        }
    };
};

export { validateInput };
