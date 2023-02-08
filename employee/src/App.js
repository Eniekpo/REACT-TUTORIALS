import Header from "./components/Header";
import Employees from "./pages/Employees";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Customers from "./pages/Customers";
import Dictionary from './pages/Dictionary';
import Definition from "./pages/Definition";

function App() {
  return (
    <Router>
        <Header>
        <Routes>
          <Route path='/' element ={<Employees />} />
          <Route path='/customers' element ={<Customers />} />
          <Route path='/dictionary' element ={<Dictionary />} />
          <Route path='/definition' element ={<Definition />} />
        </Routes>
    </Header>
      </Router>
  )

}

export default App;
