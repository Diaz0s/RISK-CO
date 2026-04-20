import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import { collection, onSnapshot, query, orderBy, addDoc } from "firebase/firestore";
import { db } from "./firebase";


function App() {
  useEffect(() => {
  const q = query(
    collection(db, "reportes"),
    orderBy("fecha", "desc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const datos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setReportes(datos);
  });

  return () => unsubscribe();
}, []);
  const [form, setForm] = useState({
  playa: "",
  estado: "",
  comentario: "",
  costo: ""
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "reportes"), {
      ...form,
      fecha: new Date()
    });

    alert("Reporte enviado 🚀");

    setForm({
      playa: "",
      estado: "",
      comentario: "",
      costo: ""
    });

  } catch (error) {
    console.error(error);
  }
};
  const [animated, setAnimated] = useState(false);
const [reportes, setReportes] = useState([]);
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
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Lumaya Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#about">¿Qué es?</a></li>
            <li><a href="#features">Funciones</a></li>
            <li><a href="#how">Cómo funciona</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>LUMAYA</h1>
        <p>Sabe cómo está la playa antes de ir</p>
        <button onClick={scrollToFeatures} className="btn-scroll">
          Explorar
          <span className="arrows">↓</span>
        </button>
        <div className="diagonal"></div>
      </section>

      {/* PROBLEMA */}
      <section className="about">
        <h2>¿Te ha pasado esto?</h2>
        <p>
          Llegas a una playa y está llena, el clima cambia sin aviso o terminas pagando de más.
          La información turística muchas veces no está actualizada.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section id="about" className="about">
        <h2>¿Qué es Lumaya?</h2>
        <p>
          Lumaya es una plataforma colaborativa que te muestra en tiempo real el estado de las playas:
          clima, condiciones, riesgos y costos, para que tomes mejores decisiones antes de viajar.
        </p>
      </section>

      {/* FUNCIONES */}
      <section className="features" id="features">
        <div className="cards">
          <div className="card">
            <h3>📢 Reportes en tiempo real</h3>
            <p>Usuarios comparten el estado actual de las playas</p>
          </div>

          <div className="card">
            <h3>🗺️ Mapa interactivo</h3>
            <p>Explora playas cercanas con información actualizada</p>
          </div>

          <div className="card">
            <h3>⚠️ Alertas y condiciones</h3>
            <p>Clima, ocupación y posibles riesgos al instante</p>
          </div>

          <div className="card">
            <h3>💸 Costos reales</h3>
            <p>Precios de transporte y servicios reportados por usuarios</p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="how" className="system">
        <h2>¿Cómo funciona?</h2>
        <div className="system-grid">
          <div className="system-box">
            <div className="pulse"></div>
            <h3>1. Entra a Lumaya</h3>
            <p>Accede desde tu celular o web</p>
          </div>

          <div className="system-box">
            <div className="pulse"></div>
            <h3>2. Explora el mapa</h3>
            <p>Visualiza playas cercanas</p>
          </div>

          <div className="system-box">
            <div className="pulse"></div>
            <h3>3. Revisa reportes</h3>
            <p>Consulta el estado actual</p>
          </div>

          <div className="system-box">
            <div className="pulse"></div>
            <h3>4. Decide mejor</h3>
            <p>Evita sorpresas y ahorra dinero</p>
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="screenshots">
        <h2>Así se verá Lumaya</h2>
        <div className="shots">
          <div className="shot">Mapa en vivo</div>
          <div className="shot">Reportes del día</div>
          <div className="shot">Clima y condiciones</div>
        </div>
      </section>

      {/* CTA */}
    <section id="contact" className="contact">
  <h2>Contacto</h2>
  <p>¿Quieres colaborar o saber más sobre Lumaya?</p>

  <div className="contact-card">
    
    <p>📧 Email</p>
    <a href="oscardiaz712015@gmail.com@gmail.com">oscardiaz712015@gmail.com</a>

    <p>💼 LinkedIn</p>
    <a href="https://linkedin.com/in/oscar-díaz-83134439b" target="_blank">
     www.linkedin.com/in/oscar-díaz-83134439b
    </a>

    <p>💻 GitHub</p>
    <a href="https://github.com/Diaz0s" target="_blank">
      https://github.com/Diaz0s
    </a>

  </div>
</section>
    

      {/* FOOTER */}
      <footer>
        <p>Lumaya © 2026</p>
      </footer>
    </>
  );
}

export default App;
