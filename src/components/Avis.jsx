import React from "react";
import "./Avis.css";

export default function Avis() {
  return (
    <section className="avis" id="avis">
      <h2 className="avis-title">Avis de nos clients</h2>
      <div className="avis-grid">
        <div className="avis-card">
          <div className="avis-header">
            <img src="/images/client1.jpg" alt="Client 1" className="avis-photo" />
            <h3>Jean Dupont</h3>
          </div>
          <p>
            "Travail impeccable, délais respectés et une équipe très professionnelle.
            Je recommande vivement cette entreprise."
          </p>
        </div>

        <div className="avis-card">
          <div className="avis-header">
            <img src="/images/client2.jpg" alt="Client 2" className="avis-photo" />
            <h3>Marie Lambert</h3>
          </div>
          <p>
            "Une rénovation parfaite de mon appartement, résultat au-delà de mes
            attentes. Bravo !"
          </p>
        </div>

        <div className="avis-card">
          <div className="avis-header">
            <img src="/images/client3.jpg" alt="Client 3" className="avis-photo" />
            <h3>Karim Haddad</h3>
          </div>
          <p>
            "Équipe réactive et sérieuse, ils ont su s’adapter à nos contraintes.
            Excellent partenaire BTP."
          </p>
        </div>
      </div>
    </section>
  );
}