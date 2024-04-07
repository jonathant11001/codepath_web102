import { useEffect, useState } from 'react';
import RainChart from '../components/RainChart'
import { Link } from "react-router-dom";

function Home() {
  const NewYorkKey = 349727;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [list, setList] = useState([]);
  const [averageTemperature, setAverageTemperature] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showRainOrSnow, setShowRainOrSnow] = useState(false);
  const [searchHour, setSearchHour] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" +
        NewYorkKey +
        "?apikey=" +
        API_KEY +
        "&language=en-us&details=true&metric=true"
      );
      const json = await response.json();
      setList(json);
    };
    fetchWeather().catch(console.error);
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      const sumOfTemperatures = list.reduce((sum, hourlyData) => sum + hourlyData.Temperature.Value, 0);
      const average = (((sumOfTemperatures / list.length) * 9/5) + 32).toFixed(2);
      setAverageTemperature(average);
    }
  }, []);

  const searchResult = list.filter(hourlyData => {
    if(showRainOrSnow == true){
      if(hourlyData.RainProbability > 0 || hourlyData.SnowProbability > 0){
        return hourlyData.DateTime.split("T")[1].split("-")[0].split(":")[0].includes(searchHour);
      }
    }
    else{
      return hourlyData.DateTime.split("T")[1].split("-")[0].split(":")[0].includes(searchHour);
    }
  });

  return (
    <div className="whole-page">
      <h1>Weather Web</h1>
      <h2>United States {"\n"} New York</h2>
      <h2>Average Temperature {"\n"} {averageTemperature}</h2>
      <h2 className="time"> Current Time {"\n"} {currentTime.toLocaleTimeString()}</h2>
      <div className = "searchbox">
        <label>
          Search Hour:
          <input 
            type="text" 
            value={searchHour} 
            onChange={(e) => setSearchHour(e.target.value)} 
          />
        </label>
        <label>
          Show Rain or Snow:
          <input 
            type="checkbox" 
            checked={showRainOrSnow} 
            onChange={() => setShowRainOrSnow(!showRainOrSnow)} 
          />
        </label>
      </div>
      <div className='data'>
        <table>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Temperature</th>
            <th>Rain</th>
            <th>Snow</th>
            <th>Daylight</th>
            <th>URL</th>
          </tr>
          {searchResult.map(hourlyData => (
            <tr>
              <td>
                {hourlyData.DateTime.split("T")[0]}
              </td>
              <td>
                {hourlyData.DateTime.split("T")[1].split("-")[0].split(":")[0]}:00
              </td>
              <td>
                {((hourlyData.Temperature.Value * 9/5) + 32).toFixed(2)}°F
              </td>
              <td>
                {hourlyData.RainProbability}%
              </td>
              <td>
                {hourlyData.SnowProbability}%
              </td>
              <td>
                {hourlyData.IsDaylight ? "🌞" : "🌙"}
              </td>
              <td>
                <Link
                  style={{ color: "White" }}
                  to={{pathname: `/DayDescription/${hourlyData.DateTime}`, state: { hourlyData: hourlyData }}}
                  key={hourlyData.DateTime.split("T")[0]}
                >
                  🔗
                </Link>
              </td>
            </tr>
          ))}
        </table>
        <RainChart rainData={searchResult.map(hourlyData => ({
          time: hourlyData.DateTime.split("T")[1].split("-")[0].split(":")[0],
          probability: hourlyData.RainProbability
        }))} />
      </div>
    </div>
  );
}

export default Home;
