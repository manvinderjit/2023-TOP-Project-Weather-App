import { fetchWeatherData } from '../components/api.js';

const homeContent = () => {
    createMainElement();
    createWeatherForm();
    submitFormBehavior();
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
        const data = fetchWeatherData(location);
        console.log(data);
        event.preventDefault();
    });
};

const createWeatherDisplaySection = () => {
    const displayWrapper = document.createElement('div');
};

export { homeContent };
