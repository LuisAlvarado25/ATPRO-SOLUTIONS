import { useEffect, useState } from 'react';
import './Topbar.css';

function Topbar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`topbar ${show ? 'visible' : 'hidden'}`}>
      <div className="contact-item"> ventas1@atpro.mx</div>
      <div className="contact-item"> +52 4777210130</div>
    </div>
  );
}

export default Topbar;