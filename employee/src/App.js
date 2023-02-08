import Header from "./components/Header";
import Employees from "./pages/Employees";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Customers from "./pages/Customers";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <Router>
        <Header>
        <Routes>
          <Route path='/' element ={<Employees />} />
          <Route path='/customers' element ={<Customers />} />
          <Route path='/dictionary' element ={<Dictionary />} />
        </Routes>
    </Header>
      </Router>
  )

}

export default App;
