const getWeatherData = async (location = 'toronto') => {
    const respone = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=${process.env.AQI_MODE}`, { mode: 'cors' });
    const weatherData = await respone.json();
    return weatherData;
};

const processWeatherData = (_weatherData) => {
    console.log(_weatherData);
    const { name, region, country } = _weatherData.location;
    const { temp_c, temp_f, feelslike_c, feelslike_f } = _weatherData.current;
    return { name, region, country, temp_c, temp_f, feelslike_c, feelslike_f };
};

export { getWeatherData, processWeatherData };
