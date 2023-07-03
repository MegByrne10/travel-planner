import { useEffect, useState } from 'react';
import { getTripsFromApi } from '../redux/userActions.js';
import Trips from "../components/trips";

export const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    getTripsFromApi().then((items) => {
      if (mounted) {
        const trips = setTrips(items);
      }
    });
    return () => (mounted = false);
  }, []);
  

  return (
    <div>
      <h1>Your Trips</h1>
      <Trips trips={trips} />
    </div>
  )
}

export default Dashboard;