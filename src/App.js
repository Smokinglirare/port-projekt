import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/portfolio" exact element={<PortfolioPage />} />

      </Routes>
      
      </Router> 
      
    </div>
  );
}

export default App;
