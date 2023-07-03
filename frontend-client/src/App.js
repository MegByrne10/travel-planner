import './App.css';
import { Routes, Route } from 'react-router-dom';
import Pages from './Pages';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Pages.Home />} />
          <Route path="/signup" element={<Pages.Signup />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/dashboard" element={<Pages.Dashboard />} />
        </ Route>
      </Routes>
    </div>
  );
}

export default App;
