import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LinesPage() {
  const { lineColor } = useParams();

  const [trainData, setTrainData] = useState<any[]>([]);
  const [stationData, setStationData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchData() {

    if (!lineColor) return;

    try {
      setLoading(true);
      setError("");

      const trainsResponse = await fetch (
        `https://midsem-bootcamp-api.onrender.com/arrivals/${lineColor}`
        
      );
      const stantionsResponse = await fetch(
        `https://midsem-bootcamp-api.onrender.com/stations/${lineColor}`
      );

      const trains = await trainsResponse.json();
      const stations = await stantionsResponse.json();
      
      setTrainData(trains);
      setStationData(stations);
    } catch (err) {
      setError("Failed to fetch train Data");
    } finally {
      setLoading(false);
    }
  }
  fetchData();
  } , [lineColor])

  return (
    <div>
      <h1>Lines Page</h1>
      <p>Current line: {lineColor}</p>
      
      <p>Loading: {loading ? "true" : "false"}</p>
      <p>Error: {error}</p>

      <p>Train count: {trainData.length}</p>
      <p>Station count: {stationData.length}</p>
    </div>
  );
}