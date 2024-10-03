import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Home/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
