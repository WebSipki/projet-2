import React from "react";
import chantierImg from "../assets/chantier.jpg"; // chemin relatif correct
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${chantierImg})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Construisons l’avenir ensemble</h1>
        <p className="hero-subtitle">
          Des solutions fiables pour vos projets
        </p>
        <a href="#devis" className="hero-btn">Demander un devis</a>
      </div>
    </section>
  );
}