const getWeatherData = async (location = 'toronto') => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=${process.env.AQI_MODE}`, { mode: 'cors' });
        if (response.status === 200) {
            const weatherData = await response.json();
            return ([response.status, weatherData]);
        } else {
            return ([response.status]);
        }
    } catch (error) {
        console.error(error);
    }
};

const fetchWeatherData = async (_location) => {
    try {
        const _weatherData = await getWeatherData(_location);
        if (_weatherData[0] === 200) {
            const { name, region, country } = _weatherData[1].location;
            const { temp_c, temp_f, feelslike_c, feelslike_f } = _weatherData[1].current;
            return { name, region, country, temp_c, temp_f, feelslike_c, feelslike_f };
        } else {
            return ({ error: 'Something went wrong', status: _weatherData[0] });
        }
    } catch (error) {
        console.error(error);
    }
};

export { fetchWeatherData };

// 1. Input validation
