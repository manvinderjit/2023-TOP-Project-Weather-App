import { getWeatherData, processWeatherData } from './components/api.js';

const data = await getWeatherData('vancouver');
console.log(processWeatherData(data));
