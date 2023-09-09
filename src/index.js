import { getWeatherData, processWeatherData } from './components/api.js';
import { homeContent } from './modules/home.js';
import './style.css';

// const data = await getWeatherData('vancouver');
// console.log(processWeatherData(data));
homeContent();
