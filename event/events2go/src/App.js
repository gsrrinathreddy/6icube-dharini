import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Events from './components/Pages/Events';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="About" element={<About/>}/>
      <Route path="Blog" element={<Blog/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Events" element={<Events/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
