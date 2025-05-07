import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact';
import Nav from './components/Nav.jsx';


function App() {


  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
