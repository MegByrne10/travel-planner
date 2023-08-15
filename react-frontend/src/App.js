import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Flights from "./pages/Flights";
import StyledComponents from "./pages/StyledComponents";
import NavBar from "./components/navigation/NavBar";

function App() {

  return (
    <div className="bg-theme-light dark:bg-theme-dark dark:text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/styled-components" element={<StyledComponents/>} />
      </Routes>
    </div>
  )
}

export default App;
