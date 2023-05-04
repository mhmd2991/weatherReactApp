import axios from "axios";
import Search from "./components/search/Search";
import WeatherResult from "./components/weather/Weather";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (search) => {
    setError(null);
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
