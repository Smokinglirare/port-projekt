import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar/Navbar';
import FooterNav from './Components/FooterNav/FooterNav';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/portfolio" exact element={<PortfolioPage />} />

      </Routes>
      <FooterNav />
      </Router> 
      
    </div>
  );
}

export default App;
