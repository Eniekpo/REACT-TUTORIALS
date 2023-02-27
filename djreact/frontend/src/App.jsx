import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/:id' element={<Customer />} />
      </Routes>
    </Router>
  );
}

export default App;
