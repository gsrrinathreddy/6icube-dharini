import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Bangles from './components/Pages/Bangles';
import Bracelets from './components/Pages/Bracelets';
import Rings from './components/Pages/Rings';
import EarRings from './components/Pages/EarRings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="Bangles" element={<Bangles/>}/>
      <Route path="Bracelets" element={<Bracelets/>}/>
      <Route path="Rings" element={<Rings/>}/>
      <Route path="EarRings" element={<EarRings/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
