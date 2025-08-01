import { useState } from 'react';
import logo from '../assets/ATPRO.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>INICIO</Link>
        <Link to="/Productos" onClick={() => setIsOpen(false)}>PRODUCTOS</Link>
        <Link to="/Soluciones" onClick={() => setIsOpen(false)}>SOLUCIONES</Link>
        <Link to="/Conocenos" onClick={() => setIsOpen(false)}>CONÓCENOS</Link>
        <Link to="/Contacto" onClick={() => setIsOpen(false)}>CONTACTO</Link>
      </div>
    </nav>
  );
};

export default Navbar;
