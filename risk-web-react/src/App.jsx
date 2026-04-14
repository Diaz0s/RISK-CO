import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const [animated, setAnimated] = useState(false);

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    section.scrollIntoView({ behavior: "smooth" });

    if (animated) return;
    setAnimated(true);

    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("show");
        }, i * 200);
      });
    }, 500);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Risk Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Funciones</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <h1>RISK</h1>
        <p>Reporta, visualiza y anticipa riesgos en tiempo real</p>
        <button onClick={scrollToFeatures} className="btn-scroll">
          Echar un vistazo
          <span className="arrows">↓</span>
        </button>
        <div className="diagonal"></div>
      </section>

      <section id="about" className="about">
        <h2>¿Qué es Risk?</h2>
        <p>
          Risk es una aplicación colaborativa que permite a los usuarios reportar,
          visualizar y anticipar riesgos en tiempo real en el Caribe colombiano.
        </p>
      </section>

      <section className="features" id="features">
        <div className="cards">
          <div className="card">
            <h3>📍 Reportes en tiempo real</h3>
            <p>Los usuarios informan incidentes al instante</p>
          </div>

          <div className="card">
            <h3>🗺️ Mapa colaborativo</h3>
            <p>Visualiza reportes de toda la comunidad</p>
          </div>

          <div className="card">
            <h3>🚨 Alertas inteligentes</h3>
            <p>Recibe avisos según tu ubicación</p>
          </div>
        </div>
      </section>

      <section className="system">
        <h2>Sistema en desarrollo</h2>
        <div className="system-grid">
          <div className="system-box">
            <div className="pulse"></div>
            <h3>🗺️ Mapa en tiempo real</h3>
            <p>Visualización geolocalizada</p>
          </div>

          <div className="system-box">
            <div className="pulse"></div>
            <h3>🚨 Alertas inteligentes</h3>
            <p>Notificaciones dinámicas</p>
          </div>

          <div className="system-box">
            <div className="pulse"></div>
            <h3>📍 Reportes ciudadanos</h3>
            <p>Información colaborativa</p>
          </div>

          <div className="system-box">
            <div className="pulse"></div>
            <h3>📡 Red en construcción</h3>
            <p>Escalando en el Caribe</p>
          </div>
        </div>
      </section>

      <section className="screenshots">
        <h2>Interfaz de la aplicación</h2>
        <div className="shots">
          <div className="shot">Pantalla mapa</div>
          <div className="shot">Alertas</div>
          <div className="shot">Reportes</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>¿Quieres colaborar o saber más sobre Risk?</p>
        <button className="btn-scroll">Contáctanos</button>
      </section>

      <footer>
        <p>Risk © 2026</p>
      </footer>
    </>
  );
}

export default App;