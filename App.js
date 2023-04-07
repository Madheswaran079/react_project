import './App.css';
// import Footer from './components/footer';
// import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Pulsar from './components/pulsar';
import CustomerService from './components/customerService';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pulsar" element={<Pulsar />} />
            <Route path="/customerService" element={<CustomerService />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;