import axios from "axios";
let location_key = "95eea536218446a6bd29e75e861f5daf";
let weather_api_key = "92de6aabc5d742d1af952526231706";

export const getLocationApi = async () => {
  const data = await axios.get(
    `https://api.geoapify.com/v1/ipinfo?&apiKey=${location_key}`
  );
  return data.data;
};

export const apiRequest = async (location) => {
  const weatherData = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${location}&aqi=no&lang=en`
  );
  return weatherData;
};
