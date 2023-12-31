import { useState, useEffect } from 'react';
import axios from 'axios';
import Trip from './Trip';

const API_URL = "http://localhost:3001/api/v1/trips";
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ${localStorage.token}`
  }
};

function Trips () {  
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const response = await axios.get(API_URL, config);
    setTrips(response.data);
  }

  useEffect(() => {
    fetchTrips();
  }, []);

  const renderedTrips = trips.map((trip, i) => {
    return(
      <Trip 
        key={trip.id}
        title={trip.title} 
        description={trip.description} 
        startDate={trip.start_date} 
        endDate={trip.end_date}
      />
    );
  });

  return (
    <div>
      <h1>Your Trips</h1>
      <div>{renderedTrips}</div>
    </div>
  );
}

export default Trips;