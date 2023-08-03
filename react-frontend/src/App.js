import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StyledComponents from "./pages/StyledComponents";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styled-components" element={<StyledComponents/>} />
      </Routes>
    </>
  )
}

export default App;
