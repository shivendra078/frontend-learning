
import "./App.css";

function Navbar() {
  return (
    <div className="navbar">
      <h3>NAVBAR</h3>
      <p>Logo | Home | About | Contact</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <p className="section-label">
        DIV 1 — HERO SECTION
      </p>

      <h2>Welcome to my website</h2>

      <p>
        I am learning React and frontend development.
      </p>

      <button>Get Started</button>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h3>FOOTER</h3>
      <p>Copyright © 2026</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}


