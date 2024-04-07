import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const DayDescription = () => {
  let params = useParams();
  const NewYorkKey = 349727;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" +
        NewYorkKey +
        "?apikey=" +
        API_KEY +
        "&language=en-us&details=true&metric=false"
      );
      const json = await response.json();
      setList(json);
    };
    fetchWeather().catch(console.error);
  }, []);

  const searchResult = list.filter(hourlyData => {
    return hourlyData.DateTime.includes(params.day);
  });

  const convertToAMPM = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const ampm = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes} ${ampm}`;
  };

  return(
    <div className="description">
      {searchResult.map(hourlyData => 
        <div>
          <h1>
            {hourlyData.DateTime.split("T")[0]}
            {"\n"}
            {convertToAMPM(hourlyData.DateTime.split("T")[1].split("-")[0])} 
          </h1>
          <p>
            It is currently {hourlyData.IsDaylight ? "day time" : "night time"} with the 
            temperature at {hourlyData.Temperature.Value}°F. It is {hourlyData.IconPhrase} with 
            a {hourlyData.PrecipitationProbability} % chance of raining/snowing.
          </p>
          <a href={hourlyData.Link}>Website Forcast</a>
        </div>
      )}
    </div>
  );

};

export default DayDescription;