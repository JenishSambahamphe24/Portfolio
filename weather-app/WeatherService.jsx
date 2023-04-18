const apiKey = '19b88a310db7b770be90d330c8fbb197'

const makeIconURL = (iconId) => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`
}

const getFormattedWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

  const fetchedData = await fetch(URL)
  const jsonData = await fetchedData.json()

  const {
    weather,
    main: {temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name
  } = jsonData;
  // console.log(jsonData)
  const { description, icon } = weather[0]

  return { description, iconURL: makeIconURL(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name }

}
export { getFormattedWeatherData };

