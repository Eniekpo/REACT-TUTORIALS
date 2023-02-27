import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customer/:id' element={<Customer />} />
        <Route path='/404' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
