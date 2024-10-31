import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home'
import QinDynasty from './pages/QinDynasty';
/*import './App.css'*/
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
       { <Route path="/home" element={<Home />}        
        />}
        { <Route path="/qin-dynasty" element={<QinDynasty />}        
        />}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
