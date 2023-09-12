import { fetchWeatherData } from '../components/api.js';

const homeContent = (() => {
    'use strict';

    let weatherData;
    const dummyData = { name: 'Toronto', region: 'Ontario', country: 'Canada', temp_c: '32', temp_f: '76.2', feelslike_c: '36.7', feelslike_f: '84' };

    const createHeader = () => {
        const headerElement = document.createElement('header');
        document.body.appendChild(headerElement);

        const headerContent = createHeaderContent();
        headerElement.appendChild(headerContent);
    };

    const createHeaderContent = () => {
        const headerLogoSection = document.createElement('div');
        headerLogoSection.id = 'logo-container';

        const headerLogo = document.createElement('p');
        headerLogo.textContent = "Manvinderjit's Weather App";
        headerLogoSection.appendChild(headerLogo);

        return headerLogoSection;
    };

    const createMainElement = () => {
        const mainElement = document.createElement('main');
        document.body.appendChild(mainElement);
    };

    const createWeatherForm = () => {
        const formElement = document.createElement('form');
        formElement.id = 'get-weather-data';

        const formItems = createFormItems();
        formElement.appendChild(formItems);

        document.querySelector('main').appendChild(formElement);
        submitFormBehavior();
    };

    const createFormItems = () => {
        const formItemWrapper = document.createElement('div');

        const searchInput = document.createElement('input');
        searchInput.type = 'search';
        searchInput.id = 'location';
        formItemWrapper.appendChild(searchInput);

        const searchSubmitButton = document.createElement('button');
        searchSubmitButton.type = 'submit';
        searchSubmitButton.textContent = 'Search';
        formItemWrapper.appendChild(searchSubmitButton);

        return formItemWrapper;
    };

    const createToggleSwitch = () => {
        const toggleTemperatureSliderContainer = document.createElement('div');
        toggleTemperatureSliderContainer.classList.add('slider-container');

        const toggleTemperatureWrapper = document.createElement('label');
        toggleTemperatureWrapper.classList.add('switch');

        const toggleTemperatureCheckbox = document.createElement('input');
        toggleTemperatureCheckbox.type = 'checkbox';
        toggleTemperatureCheckbox.id = 'temp-unit';
        toggleTemperatureCheckbox.addEventListener('change', () => {
            populateTemperatureFields(weatherData);
        });
        toggleTemperatureWrapper.appendChild(toggleTemperatureCheckbox);

        const toggleTemperatureSpan = document.createElement('span');
        toggleTemperatureSpan.classList.add('slider', 'round');
        toggleTemperatureWrapper.appendChild(toggleTemperatureSpan);

        toggleTemperatureSliderContainer.appendChild(toggleTemperatureWrapper);

        const temperatureUnitLabel = document.createElement('label');
        temperatureUnitLabel.id = 'label-temp-unit';
        temperatureUnitLabel.textContent = 'Change Unit';
        toggleTemperatureSliderContainer.appendChild(temperatureUnitLabel);

        const mainElement = document.querySelector('main');
        mainElement.appendChild(toggleTemperatureSliderContainer);
    };

    const submitFormBehavior = () => {
        const formElement = document.getElementById('get-weather-data');
        formElement.addEventListener('submit', (event) => {
            resetError();
            const location = document.getElementById('location').value;
            populateWeatherDisplay(location);
            event.preventDefault();
        });
    };

    const createWeatherDisplay = () => {
        const mainElement = document.querySelector('main');
        const displayWrapper = document.createElement('div');
        displayWrapper.id = 'display-wrapper';

        const displayHeader = createWeatherDisplayHeader();
        displayWrapper.appendChild(displayHeader);

        const displaySubheader = createWeatherDisplaySubheader();
        displayWrapper.appendChild(displaySubheader);
        mainElement.appendChild(displayWrapper);
    };

    const createWeatherDisplayHeader = () => {
        const displayHeader = document.createElement('div');
        displayHeader.classList.add('display-header');

        const displayLocation = document.createElement('h1');
        displayLocation.id = 'current-location';
        displayHeader.appendChild(displayLocation);

        const displayCurrentTemperature = document.createElement('div');
        displayCurrentTemperature.id = 'current-temperature';
        displayHeader.appendChild(displayCurrentTemperature);

        return displayHeader;
    };

    const createWeatherDisplaySubheader = () => {
        const displaySubheader = document.createElement('div');
        displaySubheader.id = 'display-subheader';

        const displayRegion = document.createElement('p');
        displayRegion.id = 'display-region';
        displaySubheader.appendChild(displayRegion);

        const displayFeelsLike = document.createElement('p');
        displayFeelsLike.id = 'feels-like';
        displaySubheader.appendChild(displayFeelsLike);

        return displaySubheader;
    };

    const createErrorElement = () => {
        const errorElement = document.createElement('div');
        errorElement.id = 'display-error';
        errorElement.classList.add('hidden', 'invalid');
        const mainElement = document.querySelector('main');
        mainElement.appendChild(errorElement);
    };

    const showError = (error, status) => {
        const errorElement = document.getElementById('display-error');
        errorElement.classList.remove('hidden');
        errorElement.textContent = `${error}, code: ${status}`;
    };

    const resetError = () => {
        const errorElement = document.getElementById('display-error');
        errorElement.classList.add('hidden');
        errorElement.textContent = '';
    };

    const populateWeatherDisplay = async (location) => {
        toggleLoadingSpinner(true);
        toggleTemperatureDisplay(false);
        weatherData = await fetchWeatherData(location);
        if (weatherData.error) {
            toggleLoadingSpinner(false);
            toggleTemperatureDisplay(false);
            showError(weatherData.error, weatherData.status);
            return;
        }
        // weatherData = dummyData;
        toggleLoadingSpinner(false);
        toggleTemperatureDisplay(true);

        const locationName = document.getElementById('current-location');
        locationName.textContent = weatherData.name;

        const displayRegion = document.getElementById('display-region');
        displayRegion.textContent = `${weatherData.region}, ${weatherData.country}`;

        populateTemperatureFields(weatherData);
    };

    const populateTemperatureFields = (data) => {
        const toggleTemperatureCheckboxStatus = document.getElementById('temp-unit').checked;
        const locationTemp = document.getElementById('current-temperature');
        locationTemp.textContent = toggleTemperatureCheckboxStatus ? `${data.temp_f}\u00B0F` : `${data.temp_c}\u00B0C`;
        const displayFeelsLike = document.getElementById('feels-like');
        displayFeelsLike.textContent = toggleTemperatureCheckboxStatus ? `Feels Like: ${data.feelslike_f}\u00B0F` : `Feels Like: ${data.feelslike_c}\u00B0C`;
    };

    const createLoadingSpinner = () => {
        const loadingSpinner = document.createElement('div');
        loadingSpinner.classList.add('loader', 'hidden');

        const mainElement = document.querySelector('main');
        mainElement.appendChild(loadingSpinner);
    };

    const toggleLoadingSpinner = (visibilityStatus = false) => {
        const loadingSpinner = document.querySelector('.loader');
        visibilityStatus ? loadingSpinner.classList.remove('hidden') : loadingSpinner.classList.add('hidden');
    };

    const toggleTemperatureDisplay = (visibilityStatus = true) => {
        const temperatureDisplayElement = document.getElementById('display-wrapper');
        visibilityStatus ? temperatureDisplayElement.classList.remove('hidden') : temperatureDisplayElement.classList.add('hidden');
    };

    const createFooter = () => {
        const footerElement = document.createElement('footer');

        const footerText = document.createElement('p');
        footerText.textContent = '\u00A9 Manvinderjit 2023';
        footerElement.appendChild(footerText);

        document.body.appendChild(footerElement);
    };

    createHeader();
    createMainElement();
    createWeatherForm();
    createToggleSwitch();
    createLoadingSpinner();
    createWeatherDisplay();
    createErrorElement();
    populateWeatherDisplay();
    createFooter();
})();

export { homeContent };
