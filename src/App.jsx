import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Productos from './Components/Productos';
import Soluciones from './Components/Soluciones';
import Conocenos from './Components/Conocenos';
import Contacto from './Components/Contacto';
import Inicio from './Components/Inicio'; 
import BotonWhatsApp from './Components/BotonWhatsApp';
import './App.css';

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <div style={{ paddingTop: '96px' }}>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Productos" element={<Productos/>} />
        <Route path="/Soluciones" element={<Soluciones/>} />
        <Route path="/Conocenos" element={<Conocenos/>} />
        <Route path="/Contacto" element={<Contacto/>} />
      </Routes>
      </div>

      <BotonWhatsApp></BotonWhatsApp>
    </Router>
    
  );
}

export default App;
