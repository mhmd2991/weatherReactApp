import axios from "axios";
import Search from "./components/search/Search";
import WeatherResult from "./components/weather/Weather";
import { useState } from "react";

function App() {
  /*
These lines define three state variables:
 weather, and error.
 weather represents the weather data fetched from the OpenWeather API,
 and is initially set to null.
 error represents any errors that occur during the fetching of weather data,
 and is initially set to null.
*/
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  /*
This line defines an asynchronous function called handleSearch.
The function takes a search argument representing the location to search
for weather data.
*/
  const handleSearch = async (search) => {
    setError(null);
    /*
This section uses the axios package to fetch weather data from 
the OpenWeather API. It sends a GET request to the API's endpoint 
with the search term and the API key, 
then sets the weather state variable to the data returned by the API. 
If an error occurs, the error state variable is set to the error message. 
*/
    try {
      const url = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f48cb0463b6bb8ee575b9764e0f84644&units=metric`
      );
      setWeather(url);
    } catch (err) {
      err.response.status === 404 ? setError("Invalid City") : setError("");
    }
  };
  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      {error && <div className="error">{error}</div>}
      {weather && <WeatherResult weather={weather} />}
    </div>
  );
}

export default App;
