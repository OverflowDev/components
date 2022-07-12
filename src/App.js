import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CartCard from './components/CartCard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NavbarSubmenu from './components/NavbarSubmenu'
import Login from './components/Login'
import Register from './components/Register'
import ScaleableCard from './components/ScaleableCard';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/cart-card' element={<CartCard />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/nav' element={<Nav />} />
          <Route path='/navbar-submenu' element={<NavbarSubmenu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/scalable' element={<ScaleableCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
