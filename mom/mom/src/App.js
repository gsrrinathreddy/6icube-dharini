import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Bangles from './components/Pages/Bangles';
import Bracelets from './components/Pages/Bracelets';
import Rings from './components/Pages/Rings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="Bangles" element={<Bangles/>}/>
      <Route path="Bracelets" element={<Bracelets/>}/>
      <Route path="Rings" element={<Rings/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
