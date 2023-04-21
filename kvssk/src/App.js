import './App.css';
import Navbar from './components/Navbar';
import Hobbies from './components/Pages/Hobbies';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutMe from './components/Pages/AboutMe';
import Experience from './components/Pages/Experience';
import Qualification from './components/Pages/Qualification';
import Skills from './components/Pages/Skills';
import Languages from './components/Pages/Languages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Qualification" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Languages" element={<Languages/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
