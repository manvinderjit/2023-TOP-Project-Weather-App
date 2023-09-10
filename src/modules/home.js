import { fetchWeatherData } from '../components/api.js';

const homeContent = () => {
    createMainElement();
    createWeatherForm();
    submitFormBehavior();
    createWeatherDisplay();
    populateWeatherDisplay();
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
};

const createFormItems = () => {
    const formItemWrapper = document.createElement('div');
    const searchInput = document.createElement('input');
    searchInput.id = 'location';
    searchInput.type = 'search';
    formItemWrapper.appendChild(searchInput);
    const searchSubmitButton = document.createElement('button');
    searchSubmitButton.type = 'submit';
    searchSubmitButton.textContent = 'Search';
    formItemWrapper.appendChild(searchSubmitButton);
    return formItemWrapper;
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

    // const toggleTemperature = document.createElement('div');
    // toggleTemperature.id = 'toggle-temperature';
    // toggleTemperature.textContent = 'To F';
    // displayHeader.appendChild(toggleTemperature);

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
    const data = await fetchWeatherData(location);
    console.log(data);
    const locationName = document.getElementById('current-location');
    locationName.textContent = data.name;
    const locationTemp = document.getElementById('current-temperature');
    locationTemp.textContent = data.temp_c;
    const displayRegion = document.getElementById('display-region');
    displayRegion.textContent = `${data.region}, ${data.country}`;
    const displayFeelsLike = document.getElementById('feels-like');
    displayFeelsLike.textContent = `Feels Like: ${data.feelslike_c}`;
};

const switchTemperatureUnit = () => {

};

export { homeContent };
