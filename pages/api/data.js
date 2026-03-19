import config from "../../config.json";

export default async function handler(req, res) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${config.latitude}&longitude=${config.longitude}&current=temperature_2m&timezone=Europe%2FParis`
  );

  const data = await response.json();
  res.status(200).json(data);
}