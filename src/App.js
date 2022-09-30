import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import PortfolioPage from "./Pages/PortfolioPage"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/portfolio" exact element={<PortfolioPage />} />

      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
