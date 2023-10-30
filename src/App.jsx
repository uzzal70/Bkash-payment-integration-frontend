import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import PayWithBkash from './PayWithBkash';
import Response from './Response';
import Refund from './Refund';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paywithbkash" element={<PayWithBkash />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/payment/:message" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
