import { fetchWeatherData } from '../components/api.js';

const homeContent = (() => {
    'use strict';

    let weatherData;

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

        const toggleTemperatureSliderContainer = createToggleSwitch();

        formItemWrapper.appendChild(toggleTemperatureSliderContainer);

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
        toggleTemperatureWrapper.appendChild(toggleTemperatureCheckbox);

        toggleTemperatureCheckbox.addEventListener('change', () => {
            populateTemperatureFields(weatherData);
        });

        const toggleTemperatureSpan = document.createElement('span');
        toggleTemperatureSpan.classList.add('slider', 'round');
        toggleTemperatureWrapper.appendChild(toggleTemperatureSpan);

        toggleTemperatureSliderContainer.appendChild(toggleTemperatureWrapper);

        const temperatureUnitLabel = document.createElement('label');
        temperatureUnitLabel.id = 'label-temp-unit';
        temperatureUnitLabel.textContent = 'Change Unit';
        toggleTemperatureSliderContainer.appendChild(temperatureUnitLabel);

        return toggleTemperatureSliderContainer;
    };

    const submitFormBehavior = () => {
        const formElement = document.getElementById('get-weather-data');
        formElement.addEventListener('submit', (event) => {
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

    const populateWeatherDisplay = async (location) => {
        weatherData = await fetchWeatherData(location);

        const locationName = document.getElementById('current-location');
        locationName.textContent = weatherData.name;

        const displayRegion = document.getElementById('display-region');
        displayRegion.textContent = `${weatherData.region}, ${weatherData.country}`;

        populateTemperatureFields(weatherData);
    };

    const populateTemperatureFields = (data) => {
        const toggleTemperatureCheckboxStatus = document.getElementById('temp-unit').checked;
        const locationTemp = document.getElementById('current-temperature');
        locationTemp.textContent = toggleTemperatureCheckboxStatus ? data.temp_f : data.temp_c;
        const displayFeelsLike = document.getElementById('feels-like');
        displayFeelsLike.textContent = toggleTemperatureCheckboxStatus ? data.feelslike_f : data.feelslike_c;
    };

    createMainElement();
    createWeatherForm();
    submitFormBehavior();
    createWeatherDisplay();
    populateWeatherDisplay();
})();

export { homeContent };
