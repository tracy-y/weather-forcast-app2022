Step 1: Break The UI Into A Component Hierarchy

 - App render background image and layout of local weather , other cities and forecast 
  - LocalWeather: render local weather, layout of forecast and city name
   - Weather: render weather, layout of temperature, main weather, humidity and wind
    - Temperature: render value with icon
    - MainWeather: render value
    flex
    - WeatherItem: render weather item humidity, layout of title and value
    bolder
    - WeatherItem: render weather item wind, layout of title and value
    bolder
    - CityName: render value and fancy border
  - OtherCities： render other cities, Title and list of city weathers
   - Title: Other Cities 
   - Section: render layout of title and city weathers
     - CityWeather: render city wether
        - CityName: render value
        - Temperature: render value with icon
        - WeatherIcon: render weather image given by icon value
  - Forecast: render forecast, title and list of daily weather
   - Title: Forecast
   - Section: render layout of title and daily weathers
    - DailyWeather: render daily weather
        - Day
        - WeatherIcon render weather image given by icon value
        - Temperature: render value with icon


Components
- Temperature
- WeatherItem
- Section: Layout of title and something weathers

Step 2: Build A Static Version in React