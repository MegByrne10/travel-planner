import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StyledComponents from "./pages/StyledComponents";

function App() {

  return (
    <div className="bg-theme-light dark:bg-theme-dark dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styled-components" element={<StyledComponents/>} />
      </Routes>
    </div>
  )
}

export default App;
