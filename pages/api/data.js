import config from "../../config.json";

export default async function handler(req, res) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset`
  );
  const data = await response.json();
  res.status(200).json(data);
}